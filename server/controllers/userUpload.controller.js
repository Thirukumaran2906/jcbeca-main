const AWS = require('aws-sdk')

const { Submission } =require('../models/submission.model');
const { v4: uuidv4 } = require('uuid'); // For generating UUID

const dotenv = require('dotenv');

dotenv.config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  });
  const s3 = new AWS.S3();
  


  const getSignedUrl = async (req, res) => {
    const {
      submissionType,
      title,
      abstract,
      keywords,
      researchArea,
      application,
      paperType,
      filename,
      authors,
      correspondingAuthor,
    } = req.body;
  
    const bucketName = process.env.AWS_S3_USER_BUCKET_NAME;
    const key = filename;
    const signedUrlExpireSeconds = Number(process.env.AWS_S3_SIGNED_URL_EXPIRY_SECONDS);
    console.log('Signed URL generating API invoked', { bucketName, key });
  
    try {
      const url = await s3.getSignedUrlPromise('putObject', {
        Bucket: bucketName,
        Key: key,
        ContentType: 'application/pdf',
        Expires: signedUrlExpireSeconds,
      });
      console.log(url);
      console.log('Signed URL generated successfully', { key, signedUrlExpireSeconds });
      console.log('S3 upload details created', { key });
      const fileUrlS3 = `https://${process.env.AWS_S3_USER_BUCKET_NAME}.s3.amazonaws.com/${key}`;
  
      try {
         const uuid=uuidv4();
          const S3data = await Submission.create({
            Paper_Id: uuid,
            Title: title,
            submissionType : submissionType,
            Abstract: abstract,
            KeyWords: keywords,
            Research_Area: researchArea,
            Application: application,
            Paper_Type : paperType ,
            Author_Names: authors.map(author => author.name),
            Author_Emails: authors.map(author => author.email),
            Author_Departments: authors.map(author => author.department),
            Author_Institutions: authors.map(author => author.institution),
            Author_Countrys: authors.map(author => author.country),
            Author_Numbers: authors.map(author => author.contactNo),
            Contact_Number : correspondingAuthor.contactNo, 
            State: correspondingAuthor.state,
            City: correspondingAuthor.city,
            Zip_Code: correspondingAuthor.pinCode,
            Address_1: correspondingAuthor.addressLine1,
            Address_2: correspondingAuthor.addressLine2,
            File_Path: fileUrlS3,
            Journal_File_Path :"",
            Status: 0,
            isUploaded: false,
          });
          console.log("data created");
        
  
      } catch (error) {
        console.log(error.message);
        console.log('Error occurred during saving S3 upload details', { key });
      }
  
      return res.json({
        success: true,
        signedURL: url,
        key: key,
      });
  
    } catch (error) {
      console.error('Error occurred during generating the signed URL', { key, error: error.message });
      res.status(400).json({
        message: "Unable to generate URL",
      });
    }
  };
  



  const UpdateJournalFile = async (req, res) => {
    const { Paper_Id, Volume, Issue ,FileName} = req.body;
    const fileUrlS3 = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${FileName}`;
    try {
      const updatedSubmission = await Submission.findOneAndUpdate(
        { Paper_Id: Paper_Id },
        {
          $set: {
            Journal_File_Path: fileUrlS3,
            Volume: Volume,
            Issue: Issue,
            Status: 1
          }
        },
      );
  
      if (!updatedSubmission) {
        return res.status(404).json({ message: 'Submission not found' });
      }
  
      res.status(200).json(updatedSubmission);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error });
    }
  };
















  
  const updateUploadDetails = async (req, res) => {
    const { key } = req.body; 
    try {
      const updatedTrue = await Upload.updateOne(
        { Key : key }, 
        { $set: { isUploaded: true } } 
      );
      
      if (updatedTrue.modifiedCount > 0) {
        return res.json({
          success: true,
          message: 'Updated'
        });
      } else {
        return res.status(404).json({
          success: false,
          
          message: 'Document not found'
        });
      }
  
    } catch (err) {
      return res.status(400).json({
        message: 'Error in update uploadDetails function'
      });
    }
  };

  const GetFilesUser = async (req, res) => {
    try {
      const files = await Submission.find(); // Assuming Submission is your Mongoose model
      res.status(200).json(files);
    } catch (error) {
      console.error('Error fetching files:', error);
      res.status(500).json({ message: 'An error occurred while fetching files' });
    }
  };
  const GetFilesVolumeIssue = async (req, res) => {
    const { volumeNumber, issue } = req.body;
  
    try {
      const files = await Submission.find({ Volume: volumeNumber, Issue: issue ,Status : 1 });
      res.status(200).json(files);
    } catch (error) {
      console.error('Error fetching files:', error);
      res.status(500).json({ message: 'An error occurred while fetching files' });
    }
  };
  
  module.exports ={ getSignedUrl , GetFilesUser , UpdateJournalFile ,GetFilesVolumeIssue}
  

  