const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  PaperId: { type: String },
  Title: { type: String, required: true },
  SubmissionType: { type: String, required: true },
  Abstract: { type: String, required: true },
  Keywords: { type: String, required: true },
  ResearchArea: { type: String, required: true },
  Application: { type: String, required: true },
  PaperType: { type: String, required: true },
  AuthorName: { type: String, required: true },
  AuthorEmail: { type: String, required: true },
  AuthorDepartment: { type: String, required: true },
  AuthorInstitution: { type: String, required: true },
  AuthorCountry: { type: String, required: true },
  ContactNumber: { type: String, required: true },
  State: { type: String, required: true },
  FilePath: { type: String, required: true },
  JournalFilePath: { type: String },
  Volume: { type: Number, default: 0 },
  Issue: { type: Number, default: 0 },
  Date : { type: String },
  Pages : { type: String },
  Status: { type: Number, default: 0 },
  IsUploaded: { type: Boolean, default: false }
});

const Submission = mongoose.model('Submission', SubmissionSchema);

module.exports = { Submission };
