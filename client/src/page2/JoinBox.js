import React from 'react';
import CSS from './page2.module.css'

const JoinBox = () => {
  return (
    <div className={CSS.joinBox} id='joinbox'>
      <h3>Join as a Editorial Board Member</h3>
      <p>Will be pleased to accept services of experts in various fields of Engineering i.e. Communications, Biotechnology and Advanced Computer Applications as reviewers.</p>
      <p>After completing a Ph.D education in the relevant discipline, one must have at least three years of experience in the field and three original research publications published in a journal. Please be aware that the editor will have the final say over whether to accept your submission. Please email your biodata to <a href="mailto:your.email@gmail.com">your.email@gmail.com</a> along with a passport-sized photo.</p>
    </div>
  );
}

export default JoinBox;
