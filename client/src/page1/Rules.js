import React from 'react';
import styles from './style.module.css';

const Rules = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.heading}>Journal Information</h2>
        <p>
          <strong>ISSN:</strong> XXXX:XXXX
          <br />
          <strong>DOI: </strong>XXXXXXXXX
          <br /><br />
          <strong>Note:</strong>
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
            <li>Acceptance received from <strong>jcbecapublications@gmail.com & admin@jcbeca.com</strong> is only valid.</li>
            <li>JCBECA does not issue conference papers in the form of regular or special issues.</li>
            <li>JCBECA has no connection with any type of organization(s).</li>
            <li>Plagiarism is checked using leading plagiarism detection tools, ensuring 100% originality.</li>
          </ul>
        </p>
      </div>
      <div className={styles.box}>
        <h2 className={styles.heading}>Publication Details</h2>
        <p>
          <strong>Frequency:</strong> JCBECA publishes one volume with 3 issues every year. (April, August and December) - Triannual Journal.
          <br />
          <strong>Language of Publication:</strong> English.
          <br />
          <strong>Funded By:</strong> SELF.
          <br />
          <strong>Peer Review Policy:</strong> Double-blind peer-review.
          <br />
          <strong>Submission Deadline:</strong>There is no fixed deadline for paper submissions manuscripts are accepted year-round.
        </p>
      </div>
    </div>
  );
};

export default Rules;
