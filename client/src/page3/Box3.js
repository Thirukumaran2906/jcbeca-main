import React from 'react';
import Design from './pg3.module.css'

function Box3() {
  return (
    <div className={Design.manuscript}>
      <h2>Structure of Manuscript</h2>
      <h3>RESEARCH ARTICLE FORMAT</h3>
      <ul>
        <li>All manuscripts should be submitted in Microsoft Office format (2003 or above).</li>
        <li>The manuscript needs to be typewritten succinctly on A4-sized sheets with 1.15 spacing.</li>
        <li>The pages shall be numbers consecutively.</li>
        <li>With a margin of 2.54 cm all around.</li>
        <li>The document needs to be produced in Times New Roman with a font size of 12, and the title needs to be in bold, capital letters.</li>
        <li>The manuscript's subtitles for each section should also be in font size 12, bold face lower case, and all section headings should be in bold face capital letters.</li>
        <li>Figures and tables must be put into the article at the proper location.</li>
        <li>Throughout the text, Standard International Units must be utilized.</li>
        <li>The script should start with the title page and the content should be arranged in the following order:</li>
        <ul>
          <li>Title Page</li>
          <li>Abstract</li>
          <li>Keywords</li>
          <li>Introduction</li>
          <li>Literature Survey</li>
          <li>Proposed Methods/Model.</li>
          <li>Results and Discussion</li>
          <li>Conclusion</li>
          <li>Undertaking/funding</li>
          <li>Acknowledgements</li>
          <li>References</li>
        </ul>
      </ul>
    </div>
  );
}

export default Box3;
