import React from 'react';
import HomeCss from './style.module.css'

function Vision() {
  return (
    <div className={HomeCss.visionBox}>
      <h2>Vision and Mission</h2>
      <h3>Vision</h3>
      <p>JCBECA is committed to offering a valuable venue for aspiring readers, researchers, industry experts, and reviewers to support and promote engineering-related scientific research. The journal's purpose is to provide a renowned platform for scholars and researchers working in engineering from across the world to publish their research articles on both fundamental and advanced topics. JCBECA is driven by a commitment to excellence in research, integrity, and innovation. The journal strives to make high-quality research available and widely accessible by offering timely publication at a reasonable cost.</p>
      <h3>Mission</h3>
      <ul>
        <li>To inculcate research knowledge through research papers, addressing all the research challenges through literature survey.</li>
        <li>Delivering exceptional publication services consistently over time.</li>
        <li>An international online publication committed to breaking barriers in sharing the advanced knowledge and promoting research.</li>
        <li>Promote research and aid development.</li>
      </ul>
    </div>
  );
}

export default Vision;
