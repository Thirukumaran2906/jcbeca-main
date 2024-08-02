import React from 'react';
import CSS from './page2.module.css';

const JoinBox = () => {
  return (
    <div className={CSS.joinBox} id='joinbox'>
      <h3>Join as an Editorial Board Member</h3>
      <p>We will be pleased to accept services of experts in various fields of Engineering such as Communications, Biotechnology, and Advanced Computer Applications as reviewers.</p>
      <p>After completing a Ph.D. education in the relevant discipline, one must have at least three years of experience in the field and three original research publications published in a journal. Please be aware that the Editor-in-Chief will have the final say over whether to accept your submission. Please email your Bio-data to <strong>admin@jcbeca.com</strong> along with a passport-sized photo.</p>
      <button className={CSS.downloadButton}>Download Form</button>
    </div>
  );
}

export default JoinBox;
