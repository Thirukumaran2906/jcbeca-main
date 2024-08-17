import React from 'react';
import Design from './pg3.module.css'

function Box3() {
  return (
    <div className={Design.manuscript}>
      <h2>Structure of Manuscript</h2>
      <h3>RESEARCH ARTICLE FORMAT</h3>
      <ul>
        <li>All manuscripts should be submitted in Microsoft Office format (2003 or above).</li>
        <li>The manuscript needs to be typewritten on A4-sized sheets with 1.15 spacing.</li>
        <li>The pages should be numberd consecutively.</li>
        <li>Ensure the manuscript is formatted with a 2.54 cm margin on all sides.</li>
        <li>The document should be prepared in Times New Roman, font size 12, with the title in bold, capital letters.</li>
        <li>Subtitles for each section of the manuscript should be in font size 12, bold, and in lowercase. All section headings should be in bold, capital letters.</li>
        <li>Figures and tables should be placed within the article at the appropriate locations.</li>
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
