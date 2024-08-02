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
        <h2>Welcome to JCBECA</h2>
        <p>
          Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA) is an international online journal published quarterly. It is a one-stop, open access source for a high quality and peer-reviewed journal in the fields of Communication Engineering, Biomedical Devices, and Advanced Computer Applications. As Communication Engineering, Biomedical Engineering, and Computer Science Research are interconnected and multidisciplinary and truly involved in the advancement of mankind, JCBECA aims to provide a common platform to all research scholars, researchers, and inventors to communicate and publish original valuable research articles, critical reviews, short communications, and case studies on the cutting-edge technologies for the advancement of Engineering and Technology.
        </p>
        <br />
        <p>
          JCBECA focuses on rapid publication with facilities of access to full-length article research with Email and Whatsapp communication. JCBECA has a strict arbitrating process through its editorial procedures to publish genuine and quality papers.
        </p>
      </div>
    </div>
  );
}

export default Box;
