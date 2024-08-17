const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  Paper_Id: { type: String },
  Title: { type: String, required: true },
  submissionType: { type: String, required: true },
  Abstract: { type: String, required: true },
  KeyWords: { type: String, required: true },
  Research_Area: { type: String, required: true },
  Application: { type: String, required: true },
  Paper_Type: { type: String, required: true },
  Author_Name: { type: String, required: true },  // Changed to a single author
  Author_Email: { type: String, required: true },
  Author_Department: { type: String, required: true },
  Author_Institution: { type: String, required: true },
  Author_Country: { type: String, required: true },
  Contact_Number: { type: String, required: true },
  State: { type: String, required: true },
  City: { type: String, required: true },
  Zip_Code: { type: String, required: true },
  Address_1: { type: String, required: true },
  Address_2: { type: String, required: true },
  File_Path: { type: String, required: true },
  Journal_File_Path: { type: String },
  Volume: { type: Number, default: 0 },
  Issue: { type: Number, default: 0 },
  Status: { type: Number, default: 0 },
  isUploaded: { type: Boolean, default: false }
});

const Submission = mongoose.model('Submission', SubmissionSchema);

module.exports = { Submission };
