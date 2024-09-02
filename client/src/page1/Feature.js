import React from 'react';
import HomeCss from './style.module.css'

function Features() {
  return (
    <div className={HomeCss.featuresBox}> 
      <h2>Key Features</h2>
      <ul>
        <li>JCBECA aims to cover all major domains in Communication Engineering, Biomedical Engineering, and Advanced Computer Application.</li>
        <li>We offer fast and professional reviews by a global team of experts, ensuring most submitted papers are published within 15 days.</li>
        <li>Experience streamlined submission and publication processes with continuous online availability, enabling users to access and download articles throughout the year.</li>
        <li>One of the leading journals dedicated to advancing research across both Science and Engineering with a broad and inclusive scope.</li>
        <li>JCBECA provides digitally signed e-certificates upon the online publication of accepted articles.</li>
        <li>JCBECA charges a minimum Publication Charge.</li>
        <li>JCBECA is a non-profit non-loss organization.</li>
        <li>JCBECA does not provide any constraint over article length and presentation.</li>
      </ul>
    </div>
  );
}

export default Features;
