import React from 'react'
import styles from './ethical.module.css';

const Plagrism = () => {
  return (
    <div className={styles.boxStyle}>
    <h2>When does the plagiarism check done?</h2>
    <p>
    All the submitted manuscripts for publication are checked for plagiarism after submission and before starting review.
    </p>
    <h2>How is plagiarism handled?</h2>
    <p>
    The manuscripts in which the plagiarism is detected are handled based on the extent of the plagiarism greater than 25%
    </p>
    <h2>Plagiarism:</h2>
    <p>
    The manuscript will be given an ID and the manuscript is sent to author for content revision.
    </p>
    <h2>25 - 30% Plagiarism</h2>
    <p>
    The manuscript will not be given an ID and the manuscript is sent back to author for content revision.    </p>
    <h2> Greater than 30% Plagiarism: </h2>
    <p>
    The manuscript will be rejected without the review. The authors are advised to revise the manuscript and resubmit the manuscript.    </p>
    <h2>Why manuscripts with Greater than 30% plagiarism is rejected</h2>
    <p>
    If the plagiarism is detected more than 30%, it is found that the authors are very unlikely to revise the manuscript and submit the revised version. However, authors are welcome to do the required revisions and submit the manuscript as a new submission   </p>
  </div>
  )
}

export default Plagrism

