import React from 'react';
import Design from './pg3.module.css'

function Title() {
  return (
    <div className={Design.titlePage}>
      <h2>Title of the Manuscript</h2>
      <p>
      The title should be on the first page and provide precise information about the model proposed. The title should be followed by full names of author (s), affiliations of author (s) and institutional addresses
      </p>
      
    </div>
  );
}

export default Title;
