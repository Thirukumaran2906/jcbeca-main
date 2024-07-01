import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VolCss from './Volume.module.css'; 

const Volumes = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/files/volumes');
        setFiles(response.data);
      } catch (err) {
        setError('Error fetching files');
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);
  if (files.length===0) {
    return <div>Files will uploaded Soon</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>File Summaries</h1>
      <details>
        <summary>Volume 1</summary>
        {files.length === 0 ? (
          <p>No files found</p>
        ) : (
          <div className={VolCss.fileList}>
            {files.map((file) => (
              <div key={file._id} className={VolCss.fileBox}>
                <p><strong>Name:</strong> {file.Name}</p>
                <p><strong>Topic:</strong> {file.Topic}</p>
                <p><strong>Date Uploaded</strong> {file.Date}/{file.Month}/{file.Year}</p>
                <a href={file.S3Link} target="_blank" rel="noopener noreferrer">
                  <button className={VolCss.viewButton}>View File</button>
                </a>
              </div>
            ))}
          </div>
        )}
      </details>
    </div>
  );
};

export default Volumes;
