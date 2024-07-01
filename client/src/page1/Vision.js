import React from 'react';
import HomeCss from './style.module.css'

function Vision() {
  return (
    <div className={HomeCss.visionBox}> {/* Add visionBox class here */}
      <h2>Vision and Mission</h2>
      <h3>IJIRCBAC</h3>
      <p>IJIRCBAC is dedicated to providing a display place for budding readers, research authors, industry members, and reviewers to endorse Engineering scientific research.</p>
      <h3>JCBECE</h3>
      <p>The purpose of JCBECE journal is to give academicians and researchers in engineering from all around the world a platform to publish their scholarly articles on fundamental and advanced research.</p>
      <p>JCBECE's objective is to have novelty, gentility, and quality in work with instant publishing and affordability.</p>
      <h3>Mission:</h3>
      <ul>
        <li>To inculcate research knowledge through research papers, addressing all the research challenges through literature survey.</li>
        <li>International online publication to break the barrier in sharing the advanced knowledge and promoting research.</li>
        <li>Providing the best publication service throughout the time.</li>
        <li>Promote research and aid development.</li>
      </ul>
    </div>
  );
}

export default Vision;
