import React from 'react';
import styles from './style.module.css';

const Rules = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.heading}>Journal Information</h2>
        <p>
          <strong>Publisher:</strong> JKRMS Publications
          <br></br>
          <strong>Chief Editor:</strong> Dr. M. V. Karthikeyan
          <br />
          <strong>ISSN:</strong> 3048-9695(Online)
          <br />
          <strong>DOI: </strong>XXXXXXXXX
          <br /><br />
          <strong>Note:</strong>
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
            <li>Acceptance received from <strong>jcbecapublications@gmail.com</strong> and <strong>admin@jcbeca.com</strong> is only valid.</li>
            <li>JCBECA does not publish conference papers in the form of regular or special issues.</li>
            <li>JCBECA has no connection with any organization(s).</li>
            <li>Plagiarism is checked using leading plagiarism detection tools, ensuring 100% originality.</li>
          </ul>
        </p>
      </div>
      <div className={styles.box}>
        <h2 className={styles.heading}>Publication Details</h2>
        <p><strong>Journal Name:</strong> Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA)</p>
        <p>
          <strong>Frequency:</strong> JCBECA publishes one volume with 3 issues every year (April, August, and December) – Triannual Journal.
          <br />
          <strong>Language of Publication:</strong> English.
          <br />
          <strong>Funded By:</strong> SELF.
          <br />
          <strong>Peer Review Policy:</strong> Double-blind peer review.
          <br />
          <strong>Submission Deadline:</strong> There is no fixed deadline for paper submissions. Manuscripts are accepted year-round.
          <br />


          <strong>Year of Starting:</strong> 2024
          <br />
          <strong>Copyright:</strong> JKRMS Publications
          <br />
          <strong>Subject:</strong>  Engineering
          <br />
          <strong>Publication Format:</strong> Online
        </p>
      </div>
    </div>
  );
};

export default Rules;
