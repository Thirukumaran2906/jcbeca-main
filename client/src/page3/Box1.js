import React from 'react';
import Design from './pg3.module.css'
function Box1() {
  return (
    <div className={Design.guidelinesBox}>
      <h2>Author Guidelines</h2>
      <p>
      Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA) is a Quarterly Published Research Journal which publishes original Research Articles, Critical Reviews, Short Communications and Case study in the field of Communication technologies, Biomedical Signals and Devices and recent Computer researches. JCBECA allows unlimited access to abstract and full-text. The journal focuses on rapid publication with facilities of online research article tracking & Email/SMS alert etc.
      </p>
      <p>
      Submissions of manuscripts are accepted for review only if the work has not been published before, has not been considered for publication elsewhere, and has been agreed for publication by all authors and the institution where the work was done
      </p>
      <p>
      Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA) publishes the following manuscript types:
      </p>
      <ul>
        <li>Original Research Articles/ contributions</li>
        <li>Review Articles/ Position papers</li>
        <li>Short Communications/ Letters (short contributions)</li>
        <li>Case Study</li>
        <li>Critical reviews/ Surveys</li>
        <li>Technology Discussion/Overview Papers</li>
      </ul>
    </div>
  );
}

export default Box1;
