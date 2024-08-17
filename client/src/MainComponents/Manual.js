import React, { useState, useEffect } from 'react';
import axios from 'axios';
import formCSS from './manual.module.css';
import ThankYou from './ThankYou';

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    submissionType: '',
    title: '',
    abstract: '',
    keywords: '',
    researchArea: '',
    application: '',
    paperType: '',
    filename: '',
    author: { name: '', email: '', department: '', institution: '', country: '' },
    correspondingAuthor: {
      contactNo: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pinCode: ''
    }
  });

  const [file, setFile] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);

  useEffect(() => {
    if (isThankYouVisible) {
      const timer = setTimeout(() => {
        setIsThankYouVisible(false);
        resetForm();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isThankYouVisible]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAuthorChange = (field, value) => {
    setFormData({ ...formData, author: { ...formData.author, [field]: value } });
  };

  const handleCorrespondingAuthorChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      correspondingAuthor: { ...formData.correspondingAuthor, [name]: value }
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFormData({ ...formData, filename: selectedFile.name });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const uuid = `jcbeca${Math.floor(Math.random() * 9000000000) + 1000000000}`;
      const formDataToSend = { ...formData,uuid };

      const response = await axios.post('https://jcbeca.com/api/user/upload/user-get-signed-url', formDataToSend);
      console.log(uuid);
      if (response.status !== 200 || !response.data) {
        console.log("Failed to get signed URL, received unexpected response");
        return;
      }

      const signedUrl = response.data.signedURL;
      await axios.put(signedUrl, file, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      setIsThankYouVisible(true);
      const To = formDataToSend.author.email
      console.log(To)
      await axios.post('https://jcbeca.com/api/user/upload/response-email-user',{To,uuid});
      console.log('Form data submitted:', formDataToSend);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      submissionType: '',
      title: '',
      abstract: '',
      keywords: '',
      researchArea: '',
      application: '',
      paperType: '',
      filename: '',
      author: { name: '', email: '', department: '', institution: '', country: '' },
      correspondingAuthor: {
        contactNo: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        pinCode: ''
      }
    });
    setFile(null);
  };

  return (
    <>
      {isPopupVisible && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 20px',
            color :'black'
          }}>
            <h2>Welcome!</h2>
            <p style={{ textAlign: 'left', marginBottom: '20px' }}>
              <strong>Important Instructions:</strong><br /><br />
              • Kindly fill all the details properly as this detail will appear on the online publication page.<br />
              • It is instructed to read the publication guidelines, Processing Fees & Payment before submitting your research article.<br />
              • It is important that all must provide your working email address and mobile number. The corresponding author of the first article will be communicated for all types of correction and updates.<br />
              • Complete Details of the paper and the author (Title, Abstract, Keywords, Author Name(s), Designation(s), and Organization Name(s)) must be the same as mentioned in the research article while submitting.
            </p>
            <button onClick={() => setIsPopupVisible(false)} style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>OK</button>
          </div>
        </div>
      )}

      {isThankYouVisible && (
        <ThankYou />
      )}

      {!isPopupVisible && !isThankYouVisible && (
        <form className={formCSS.submission_form} onSubmit={handleSubmit}>
          <h2>Submission Form</h2>

          <label>Submission Type*</label>
          <select name="submissionType" value={formData.submissionType} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="new">New submission</option>
            <option value="revised">Revised submission</option>
            <option value="final">Final copy</option>
          </select>

          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />

          <label>Abstract</label>
          <textarea name="abstract" value={formData.abstract} onChange={handleChange} required></textarea>

          <label>Keywords</label>
          <input type="text" name="keywords" value={formData.keywords} onChange={handleChange} required />

          <label>Research Area</label>
          <select name="researchArea" value={formData.researchArea} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="communication">Communication</option>
            <option value="biomedical">Biomedical</option>
            <option value="computer">Computer</option>
          </select>

          <label>Application</label>
          <input type="text" name="application" value={formData.application} onChange={handleChange} required />

          <label>Paper Type</label>
          <select name="paperType" value={formData.paperType} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="research">Research article</option>
            <option value="review">Review article</option>
            <option value="survey">Survey article</option>
            <option value="short">Short communication</option>
            <option value="others">Others</option>
          </select>

          <label>Upload File</label>
          <input type="file" onChange={handleFileChange} required />

          <h3>Author</h3>
          <div className={formCSS.author_field}>
            <label>Name*</label>
            <input
              type="text"
              value={formData.author.name}
              onChange={(e) => handleAuthorChange('name', e.target.value)}
              required
            />

            <label>Email*</label>
            <input
              type="email"
              value={formData.author.email}
              onChange={(e) => handleAuthorChange('email', e.target.value)}
              required
            />

            <label>Department*</label>
            <input
              type="text"
              value={formData.author.department}
              onChange={(e) => handleAuthorChange('department', e.target.value)}
              required
            />

            <label>Institution*</label>
            <input
              type="text"
              value={formData.author.institution}
              onChange={(e) => handleAuthorChange('institution', e.target.value)}
              required
            />

            <label>Country*</label>
            <input
              type="text"
              value={formData.author.country}
              onChange={(e) => handleAuthorChange('country', e.target.value)}
              required
            />
          </div>

          <h3>Corresponding Author Details</h3>
          <div className={formCSS.corresponding_author_fields}>
            <div className={formCSS.corresponding_author_field}>
              <label>Contact Number*</label>
              <input
                type="text"
                name="contactNo"
                value={formData.correspondingAuthor.contactNo}
                onChange={handleCorrespondingAuthorChange}
                required
              />
            </div>
            <div className={formCSS.corresponding_author_field}>
              <label>Address Line 1*</label>
              <input
                type="text"
                name="addressLine1"
                value={formData.correspondingAuthor.addressLine1}
                onChange={handleCorrespondingAuthorChange}
                required
              />
            </div>
            <div className={formCSS.corresponding_author_field}>
              <label>Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.correspondingAuthor.addressLine2}
                onChange={handleCorrespondingAuthorChange}
              />
            </div>
            <div className={formCSS.corresponding_author_field}>
              <label>City*</label>
              <input
                type="text"
                name="city"
                value={formData.correspondingAuthor.city}
                onChange={handleCorrespondingAuthorChange}
                required
              />
            </div>
            <div className={formCSS.corresponding_author_field}>
              <label>State*</label>
              <input
                type="text"
                name="state"
                value={formData.correspondingAuthor.state}
                onChange={handleCorrespondingAuthorChange}
                required
              />
            </div>
            <div className={formCSS.corresponding_author_field}>
              <label>Pin Code*</label>
              <input
                type="text"
                name="pinCode"
                value={formData.correspondingAuthor.pinCode}
                onChange={handleCorrespondingAuthorChange}
                required
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default SubmissionForm;
