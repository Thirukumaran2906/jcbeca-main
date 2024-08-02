import React from 'react';
import Design from './pg3.module.css'

function Box2() {
  return (
    <div className={Design.submissionBox}>
      <h2>Manuscript Submission</h2>
      <p>All correspondence is done through e-mail. All submissions must be in English and each manuscript will be provided with a manuscript ID.</p>
      <p>In case of any problem with online submission, submit manuscripts to our mail: <a href="mailto:admin@jcbeca.com"><strong>admin@jcbeca.com</strong></a> with a brief description about the work , preferably by the corresponding author.</p>
    </div>
  );
}

export default Box2;
