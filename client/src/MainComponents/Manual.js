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
    author: { 
      name: '', 
      email: '', 
      department: '', 
      institution: '', 
      country: '',
      contactNo: '',
      state: ''
    }
  });
  const [file, setFile] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleAuthorChange = (field, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      author: { ...prevFormData.author, [field]: value }
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFormData(prevFormData => ({ ...prevFormData, filename: selectedFile.name }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true); // Disable button on submit
    setTimeout(() => {
      setIsButtonDisabled(false); // Enable the button after 8 seconds
    }, 8000);

    try {
      const uuid = `jcbeca${Math.floor(Math.random() * 9000000000) + 1000000000}`;
      const formDataToSend = { ...formData, uuid };

      const response = await axios.post('https://jcbeca.com/api/user/upload/user-get-signed-url', formDataToSend);
      if (response.status !== 200 || !response.data) {
        console.log("Failed to get signed URL, received unexpected response");
        return;
      }

      const signedUrl = response.data.signedURL;
      try {
        await axios.put(signedUrl, file, {
          headers: {
            'Content-Type': 'application/octet-stream'
          }
        });
        
        setIsThankYouVisible(true);
        const To = formDataToSend.author.email;
        await axios.post('https://jcbeca.com/api/user/upload/response-email-user', { To, uuid });
      } catch (error) {
        alert('Error during file upload, contact the admin');
        console.log(error);
      }
    } catch (error) {
      alert('Error submitting form data, contact the admin');
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
      author: { 
        name: '', 
        email: '', 
        department: '', 
        institution: '', 
        country: '',
        contactNo: '',
        state: ''
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
            color: 'black'
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
          <h2>Manuscript Submission Form</h2>

          <label>Submission Type*</label>
          <select name="submissionType" value={formData.submissionType} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="new">New submission</option>
            <option value="revised">Revised submission</option>
            <option value="final">Final copy</option>
          </select>

          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder='Example : Image Classification'/>

          <label>Abstract</label>
          <textarea name="abstract" value={formData.abstract} onChange={handleChange} required ></textarea>

          <label>Keywords</label>
          <input type="text" name="keywords" value={formData.keywords} onChange={handleChange} required placeholder='Example : Cloud Computing'/>

          <label>Research Area</label>
          <select name="researchArea" value={formData.researchArea} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="communication">Communication</option>
            <option value="biomedical">Biomedical</option>
            <option value="computer">Computer</option>
          </select>

          <label>Application</label>
          <input type="text" name="application" value={formData.application} onChange={handleChange} required placeholder='Example : Healthcare'/>

          <label>Paper Type</label>
          <select name="paperType" value={formData.paperType} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="research">Research article</option>
            <option value="review">Review article</option>
            <option value="survey">Survey article</option>
            <option value="short">Short communication</option>
            <option value="others">Others</option>
          </select>

          <label> Upload File<span style={{ color: 'red' }}> (.doc, .docx)</span></label>
          <input type="file" onChange={handleFileChange} required />


          <h3>Corresponding Author Details</h3>
          <div className={formCSS.author_field}>
            <label>Name*</label>
            <input
              type="text"
              value={formData.author.name}
              onChange={(e) => handleAuthorChange('name', e.target.value)}
              required
              placeholder='Example : Ramesh'
            />

            <label>Email*</label>
            <input
              type="email"
              value={formData.author.email}
              onChange={(e) => handleAuthorChange('email', e.target.value)}
              required
              placeholder='Example : abc@gmail.com'
            />
            <label>Contact Number*</label>
            <input
              type="text"
              value={formData.author.contactNo}
              onChange={(e) => handleAuthorChange('contactNo', e.target.value)}
              required
              placeholder='Exapmle : 86101 43762'
            />
            <label>Department*</label>
            <input
              type="text"
              value={formData.author.department}
              onChange={(e) => handleAuthorChange('department', e.target.value)}
              required
              placeholder='Example : Information Technology'
            />
            <label>Institution*</label>
            <input
              type="text"
              value={formData.author.institution}
              onChange={(e) => handleAuthorChange('institution', e.target.value)}
              required
              placeholder='Example : XYZ University'
            />
            <label>State*</label>
            <input
              type="text"
              value={formData.author.state}
              onChange={(e) => handleAuthorChange('state', e.target.value)}
              required
              placeholder='Example : Tamil Nadu'
            />
            <label>Country*</label>
            <input
              type="text"
              value={formData.author.country}
              onChange={(e) => handleAuthorChange('country', e.target.value)}
              required
              placeholder='Exapmle : India'
            />
            
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button type="submit" disabled={isButtonDisabled} style={{
              padding: '10px 90px',
              backgroundColor: 'green',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              {isButtonDisabled ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default SubmissionForm;
