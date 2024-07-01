import React from 'react';
import Design from './pg3.module.css'

function Authors() {
  return (
    <div className={Design.titlePage}>
      <h1>Corresponding Authors and Co-Authors Details and Their Affiliations</h1>
      <p>
      Author must provide their full name including their forenames and surname. The Corresponding Author of the manuscript must be marked with an (*) asterisk. In addition the corresponding author must include Telephone and E-mail address at the bottom left corner of the title page. All of the co-authors are from same or different organizations, their addresses too should be mentioned and indicated using numbers after their names. Maximum 6 authors can be allowed.
      </p>
      
    </div>
  );
}

export default  Authors;
