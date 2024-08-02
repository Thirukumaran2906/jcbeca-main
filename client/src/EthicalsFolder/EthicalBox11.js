import React from 'react';
import styles from './ethical.module.css';

const EthicalBox11 = () => {
  return (
    <div className={styles.boxStyle}>
      <h2>Peer-Review Process</h2>
      <p>
        The double blind review procedure will be applied to all manuscripts submitted to JCBECA. Every manuscript will be sent to at least two subject-matter experts for review. Reviewers will provide their recommendations to the editing office with their reviews. The Editorial Board will decide on the manuscripts after receiving all of the critiques. Submissions of papers are accepted from authors on the understanding that all submissions are original, unpublished works not currently being considered for publication in another journal. The writers will receive an email notifying them when their paper is accepted for publication. The final draft of the manuscript should be prepared by the authors using the JCBECA template. The final manuscript version and the copyright form must be sent by authors online to the editing office. A manuscript will not be re-examined for publication once it has been rejected. The authors are advised not to submit their rejected works again.
      </p>
      <p>The decision will be anyone of the following:</p>
      <ul>
        <li className={styles.listStyle}>Accept</li>
        <li className={styles.listStyle}>Accept with minor revision</li>
        <li className={styles.listStyle}>Accept with major revision</li>
        <li className={styles.listStyle}>Revise and Resubmit</li>
        <li className={styles.listStyle}>Reject</li>
      </ul>
      <p>Submitted manuscripts will be reviewed within 05 days of time (approximately).</p>
    </div>
  );
}

export default EthicalBox11;
