import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './docIframe.module.css';

const DocIframe = () => {
  const { PaperId } = useParams();
  const [submissionData, setSubmissionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        setLoading(true);
        const response = await axios.post('https://jcbeca.com/api/files/getfile', { PaperId });
        setSubmissionData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch submission data');
        setLoading(false);
      }
    };

    fetchSubmission();
  }, []);

  const handlePreviewClick = () => {
    const previewElement = document.getElementById('preview');
    if (previewElement) {
      previewElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={css.container}>
      {submissionData.Status === 1 ? (
        <div>
          <div className={css.buttonsContainer}>
            <button onClick={handlePreviewClick} className={css.previewButton}>Preview and Download</button>
          </div>

          <div className={css.card}>
            <div className={css.cardHeader}>
              <h1>{submissionData.Title?.split('|')[1] || submissionData.Title}</h1>
            </div>
            <div className={css.cardBody}>
              <h3>DOI</h3>
              {submissionData.Doi && submissionData.Doi.trim() !== "" ? (
                <p>
                  <a href={submissionData.Doi} target='_blank' rel="noopener noreferrer">
                    {submissionData.Doi}
                  </a>
                </p>
              ) : (
                <p>DOI will be declared soon</p>
              )}
            </div>
            <div className={css.cardBody}>
              <h3>Volume</h3>
              <p>{submissionData.Volume}</p>
            </div>
            <div className={css.cardBody}>
              <h3>Issue</h3>
              <p>{submissionData.Issue}</p>
            </div>
            <div className={css.cardBody}>
              <h3>Abstract</h3>
              <p>{submissionData.Abstract}</p>
            </div>
            <div className={css.cardBody}>
              <h3>Keywords</h3>
              <p>{submissionData.Keywords}</p>
            </div>
            <div className={css.cardBody}>
              <h3>Author Name</h3>
              <p>{submissionData.AuthorName}</p>
            </div>
            <div className={css.cardBody}>
              <h3>Author Institution</h3>
              <p>{submissionData.AuthorInstitution}</p>
            </div>
            <div className={css.cardBody}>
              <h3>State | Country</h3>
              <p>{submissionData.State}, {submissionData.AuthorCountry}.</p>
            </div>

            {/* Render FilePath in iframe */}
            {submissionData.FilePath && (
              <div className={css.iframeContainer} id='preview'>
                <h3 className={css.paperPreviewTitle}>Paper Preview and Download</h3>
                <iframe
                  src={submissionData.JournalFilePath}
                  title="Paper Preview"
                ></iframe>
              </div>
            )}
            <div className={css.cardBody}>
              <h3>Reference</h3>
              <p className={css.referencesList}>
                {submissionData.References.map((data, index) => (
                  <span key={index}>{data}</span>
                ))}
              </p>
            </div>

          </div>
        </div>
      ) : (
        <div>No data available, Please contact us through mail</div>
      )}
    </div>
  );
};

export default DocIframe;
