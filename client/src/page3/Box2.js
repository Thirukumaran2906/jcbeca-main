import React from 'react';
import Design from './pg3.module.css'

function Box2() {
  return (
    <div className={Design.submissionBox}>
      <h2>Manuscript Submission</h2>
      <p>All correspondence is done through e-mail. All submissions must be in English and each manuscript will be provided with a manuscript ID.</p>
      <p>In case of any problem with online submission, submit manuscripts to our mail: <a href="mailto:editor.jcbeca@gmail.com">editor.jcbeca@gmail.com</a> with a covering letter, preferably by the corresponding author.</p>
    </div>
  );
}

export default Box2;
