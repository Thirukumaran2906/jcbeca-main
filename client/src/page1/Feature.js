import React from 'react';
import HomeCss from './style.module.css'

function Features() {
  return (
    <div className={HomeCss.featuresBox}> 
      <h2>Key Features</h2>
      <ul>
        <li>JCBECA aims to cover all major domains in Communication Engineering, Biomedical Engineering, and Advanced Computer Application.</li>
        <li>Offering fast and professional review by a large team of experts from worldwide, mostly the submitted papers will be published within 15 days.</li>
        <li>Easy Submission and Publication with Online availability throughout the year enabling the user to download articles.</li>
        <li>One of the journals aiming to bring out research in both Science and Engineering research with a wider scope.</li>
        <li>JCBECA delivers digitally signed e-certificates after online publication.</li>
        <li>JCBECA charges a minimum Publication Charge because JCBECA is a non-profit non-loss organization.</li>
        <li>JCBECA does not provide any constraint for article length and presentation.</li>
      </ul>
    </div>
  );
}

export default Features;
