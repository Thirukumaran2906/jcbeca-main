import React from 'react';
import HomeCss from './style.module.css';
import img from '../images/jcbeca-cover.png';

function Box() {
  return (
    <div className={HomeCss.boxStyle}>
      <div className={HomeCss.imageContainer}>
        <img src={img} alt="JCBECA Cover" className={HomeCss.image} />
      </div>
      <div className={HomeCss.textContainer}>
        <h2>Welcome to Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA)</h2>
        <p>
        The worldwide, peer-reviewed online journal of Communication and Biomedical Engineering with Computer Applications (JCBECA) is published quarterly. JCBECA, an open-access platform, is a premier resource for high-quality research in advanced computer applications, biomedical devices, and communication engineering Recognising the interconnection and multidisciplinary nature of Biomedical Engineering, Computer Science, and Communication Engineering, JCBECA is dedicated to fostering the evolution of knowledge that benefits humanity. Academics, scientists, and innovators can use the journal's platform to share and publish original research papers, critical reviews, concise messages, and case studies on cutting-edge ideas that will affect engineering and technology in the future. 
        </p>
        <br />
        <p>
        JCBECA is committed to the rapid dissemination of knowledge and offers easy access to full-length research articles via email and WhatsApp, among other convenient means. JCBECA's rigorous peer-review process and editing standards ensure the publication of genuine, good research.
        </p>
      </div>
    </div>
  );
}

export default Box;
