import React from 'react';
import HomeCss from './style.module.css'
function Box() {




  return (
    <div className={HomeCss.boxStyle}>
      <h2 style={{ color: '#0276FD' }}>Welcome to About</h2>
      <p>Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA) is an international online journal published Quarterely, is a one-stop, open access source for a high quality and peer reviewed journal in the fields of Communication Engineering, Biomedical Devices and Advanced Computer Applications. As communication Engineering, Biomedical Engineering and Computer Science  Research are are interconnected and multidisciplinary and truly involved in the advancement on mankind, JCBECA aims to provide a common platform to all research scholars, researchers and inventor to communicate and publish original valuable research Articles, critical reviews,  short communications and case study on the cutting-edge technologies for the advancement of Engineering and technology. </p>
      <br></br>
      <p>JCBECE focuses on rapid publication with facilities of, access to full-length article research with Email and Whatsapp commination.  JCBECA has a strict arbitrating process through its editorial procedures to publish genuine and quality paper.</p>
    </div>
  );
}

export default Box;
