import React from 'react'
import copyright from '../images/copyright.png'
import HomeCss from './style.module.css'


const CopyRightBox = () => {
  return (
    <div className={HomeCss.featuresBox}> 
    <h2>Access and Copyright</h2>
    <ul>
    <li><img src={copyright}></img></li>
      <li>JCBECA is an open access international journal.</li>
      <li>The articles published in JCBECA can be used by other researchers without any restriction provided it should be cited properly.</li>
      <li>The corresponding author should get the permission from all the co-authors (if any) to publish the article in JCBECA. The authors of the accepted articles should transfer the copyright form to JCBECA editorial.</li>
      <li>The authors are the real copyright holders of the contents published in JCBECA. However, the contents published in JCBECA should not be published in other medium in the same version or in different language.</li>
      <li>The readers of JCBECA can download the paper from the journal's website at any time without any restrictions.</li>
      <li>JKRMS PUBLICATIONS online journal © 2024 is licensed under Creative Commons Attribution 4.0 International.</li>
    </ul>
  </div>
  )
}

export default CopyRightBox








