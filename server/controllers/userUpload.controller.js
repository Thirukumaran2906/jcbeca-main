const AWS = require('aws-sdk')
const nodemailer = require('nodemailer');

const { Submission } =require('../models/submission.model');
const { v4: uuidv4 } = require('uuid'); // For generating UUID

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "jcbecapublications@gmail.com", 
    pass:"kwjtjarmpcifziie" ,
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
      author
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
        ContentType: 'application/octet-stream',
        Expires: signedUrlExpireSeconds,

      });
      console.log(url);
      console.log('Signed URL generated successfully', { key, signedUrlExpireSeconds });
      console.log('S3 upload details created', { key });
      const fileUrlS3 = `https://${process.env.AWS_S3_USER_BUCKET_NAME}.s3.amazonaws.com/${key}`;
  
      try {
        const S3data = await Submission.create({
          PaperId: uuid,
          Title: title,
          SubmissionType: submissionType,
          Abstract: abstract,
          Keywords: keywords,
          ResearchArea: researchArea,
          Application: application,
          PaperType: paperType,
          AuthorName: author.name,
          AuthorEmail: author.email,
          AuthorDepartment: author.department,
          AuthorInstitution: author.institution,
          AuthorCountry: author.country,
          ContactNumber: author.contactNo,
          State: author.state,
          FilePath: fileUrlS3,
          JournalFilePath: "",
          Date : "",
          Pages : "",
          Status: 0,
          IsUploaded: false,
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
    const { Paper_Id, Volume, Issue, FileName, Date, Month, Year ,TotalPages} = req.body;
    const fileUrlS3 = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${FileName}`;
    const DOI = `${Date}/${Month}/${Year}`;
    console.log("update process")
    try {
      const updateResult = await Submission.updateOne(
        { PaperId: Paper_Id },
        {
          $set: {
            JournalFilePath: fileUrlS3,
            Volume: Volume,
            Issue: Issue,
            Date: DOI,
            Pages : TotalPages,
            Status: 1,
          },
        }
      );
      console.log("update process")

      if (updateResult.matchedCount === 0) {
        return res.status(404).json({ message: "Submission not found" });
      }
  
      res.status(200).json({ message: "Submission updated successfully", updateResult });
    } catch (error) {
      res.status(500).json({ message: "An error occurred", error });
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
    const { To, uuid } = req.body; 
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
  

  