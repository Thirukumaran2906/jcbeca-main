import React from 'react';
import CSS from './page2.module.css';

const JoinBox = () => {
  return (
    <div className={CSS.joinBox} id='joinbox'>
      <h3>Join as an Editorial Board Member</h3>
      <p>We welcome applications from experts in various fields of Engineering, including Communications, Biotechnology, and Advanced Computer Applications, to join our team of reviewers.</p>
      <p>deal candidates should hold a Ph.D. in a relevant discipline, have a minimum of three years of professional experience in the field, and possess at least three original research publications in reputable journals. Please note that the final decision on acceptance will be made by the Editor-in-Chief. To apply, please email your bio-data and a passport-sized photo to <span className="text-red-500">admin@jcbeca.com</span></p>
    </div>
  );
}

export default JoinBox;
