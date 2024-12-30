import React from 'react';
import styles from './ethical.module.css';

const EthicalBox6 = () => {
 
  return (
    <div className={styles.boxStyle}>
      <h2>Article Processing Charges:</h2>
      <p>
        JCBECA is an open access journal where all the operating expenses are met from the article processing charges.
      </p>
      <p>The article processing charges of the accepted articles are as follows:</p>
      <p>
      <p>&nbsp;</p> 

        <strong>International Authors:</strong> <span className={styles.money}>USD $5</span>. Regardless of Number of Pages.
      </p>
      <p>&nbsp;</p> 
      <p>
        <strong>Indian Authors:</strong> <span className={styles.money}>INR 350/-</span>. Regardless of Number of Pages.
      </p>
      <p>&nbsp;</p>
      <p>
        JCBECA is a highly prestigious peer-reviewed international journal. Only research publications of the highest calibre will be taken into consideration for publishing. It is recommended that authors submit their original, unpublished manuscripts for review.
      </p>
    </div>
  );
}

export default EthicalBox6;
