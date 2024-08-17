const AWS = require('aws-sdk')
const nodemailer = require('nodemailer');

const { Submission } =require('../models/submission.model');
const { v4: uuidv4 } = require('uuid'); // For generating UUID

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "ecoridenewtesting@gmail.com", 
    pass:"hffhtsrenabhnvnd" ,
  },
});

const dotenv = require('dotenv');

dotenv.config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  });
  const s3 = new AWS.S3();
  

  const getSignedUrl = async (req, res) => {
    const {
      uuid,
      submissionType,
      title,
      abstract,
      keywords,
      researchArea,
      application,
      paperType,
      filename,
      author,  // Only one author
      correspondingAuthor,
    } = req.body;
  console.log(uuid);
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
        const S3data = await Submission.create({
          Paper_Id: uuid,
          Title: title,
          submissionType: submissionType,
          Abstract: abstract,
          KeyWords: keywords,
          Research_Area: researchArea,
          Application: application,
          Paper_Type: paperType,
          Author_Name: author.name,
          Author_Email: author.email,
          Author_Department: author.department,
          Author_Institution: author.institution,
          Author_Country: author.country,
          Author_Contact_No: author.contactNo,
          Contact_Number: correspondingAuthor.contactNo,
          State: correspondingAuthor.state,
          City: correspondingAuthor.city,
          Zip_Code: correspondingAuthor.pinCode,
          Address_1: correspondingAuthor.addressLine1,
          Address_2: correspondingAuthor.addressLine2,
          File_Path: fileUrlS3,
          Journal_File_Path: "",
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


  const SendMail = (req, res) => {
    const { To, uuid } = req.body; // Destructure To and uuid from req.body
    console.log(To);
  
    const mailOptions = {
      from: "ecoridenewtesting@gmail.com",
      to: To,
      subject: "Registration Confirmation - JCBECA",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
          <h2 style="color: #004080; text-align: center;">Thank You for Registering with JCBECA!</h2>
          <p style="font-size: 16px;">
            Dear Author,
          </p>
          <p style="font-size: 16px;">
            We appreciate your interest in the Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA). Your paper has been successfully registered and will be reviewed soon.
          </p>
          <p style="font-size: 16px;">
            Please note down your registration ID for future reference: <strong>${uuid}</strong>
          </p>
          <p style="font-size: 16px;">
            Our editorial team will carefully assess your submission, and we will get back to you with the review results as soon as possible.
          </p>
          <div style="background-color: #f2f2f2; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <h4 style="color: #004080; margin-bottom: 5px;">Contact Us</h4>
            <p style="margin: 5px 0;">
              Phone: <strong>+91 86101 43762</strong>
            </p>
            <p style="margin: 5px 0;">
              Email: <strong>admin@jcbeca.com</strong>
            </p>
          </div>
          <p style="font-size: 16px; margin-top: 20px;">
            We look forward to assisting you further. Thank you for choosing JCBECA for your publication needs!
          </p>
          <p style="font-size: 16px; text-align: center; margin-top: 30px; color: #004080;">
            Best regards,<br>
            The JCBECA Team
          </p>
        </div>
      `,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error occurred while sending email:', error.message);
        return res.status(500).send({ message: 'Failed to send email', error: error.message });
      }
      console.log('Email sent successfully!');
      res.send({ message: 'Email sent successfully!', info });
    });
  };
  
  
  module.exports ={ getSignedUrl , GetFilesUser , UpdateJournalFile ,GetFilesVolumeIssue,SendMail}
  

  