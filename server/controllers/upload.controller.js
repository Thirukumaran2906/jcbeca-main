const AWS = require('aws-sdk')

const { Admin } =require('../models/admin.model');
const { Upload }=require('../models/volumes.model');
const dotenv = require('dotenv');
dotenv.config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  });
  const s3 = new AWS.S3();
  

  const getSignedUrl = async (req, res) => {
    const bucketName = process.env.AWS_S3_BUCKET_NAME;
    const key = req.body.file_name;
    const signedUrlExpireSeconds = Number(process.env.AWS_S3_SIGNED_URL_EXPIRY_SECONDS);
    console.log('Signed URL generating API invoked', { bucketName, key });
  
    try {
      const url = await s3.getSignedUrlPromise('putObject', {
        Bucket: bucketName,
        Key: key,
        ContentType: 'application/octet-stream',
        Expires: signedUrlExpireSeconds,
      });
  
      console.log('Signed URL generated successfully', { key, signedUrlExpireSeconds });
      console.log('S3 upload details created', { key });
      const fileUrlS3 = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
  
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
  

  module.exports ={ getSignedUrl , updateUploadDetails}
  
