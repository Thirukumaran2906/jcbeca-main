import React from 'react';
import Design from './pg3.module.css'

function Authors() {
  return (
    <div className={Design.titlePage}>
      <h2>Corresponding Authors and Co-Authors Details and Their Affiliations</h2>
      <p>
      Author must provide their full name including their forenames and surname. The Corresponding Author of the manuscript must be marked with an (*) asterisk. In addition the corresponding author must include Telephone and E-mail address at the bottom left corner of the title page. Whether the co-authors are from the same or different organizations, their addresses must be provided and indicated by numbers following their names. A maximum of six authors is permitted.
      </p>
      
    </div>
  );
}

export default  Authors;
