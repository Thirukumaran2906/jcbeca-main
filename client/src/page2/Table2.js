import React from 'react';
import CSS from './page2.module.css';

function TableComponent() {
  return (
    <div className={CSS.tableBox2}>
      <h2>Associate Editors</h2>
      <table>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Name, Designation, <br />Specialization</th>
            <th>Email</th>
            <th>Department & College</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td><strong>Dr. G. S. Uthayakumar</strong> <br />Associate Professor <br />Biomedical Optical Engineering</td>
            <td>uthayakumar.g.1969@ieee.org</td>
            <td>Department of Electronics and Communication Engineering, <br />St. Joseph's Institute of Technology, OMR, Chennai - 600119</td>
            <td>INDIA</td>
          </tr>
          <tr>
            <td>2</td>
            <td><strong>Dr. J. Martin Leo Manickam</strong> <br />Professor <br />Wireless Communication</td>
            <td>josephmartin74@gmail.com</td>
            <td>Department of Electronics and Communication Engineering, <br />St. Joseph's College of Engineering, OMR, Chennai - 600119</td>
            <td>INDIA</td>
          </tr>
          {/* <tr>
            <td>2</td>
            <td><strong>Dr. P.G.V.Ramesh</strong> <br />Professor <br />WDM Networks<br></br>Elastic Optical Networks</td> 
            <td>ramsdr76@gmail.com</td>
            <td>St.Joseph's Institute of Technology, OMR, Chennai -600119 <br /></td>
            <td>INDIA</td>
          </tr> */}
          {/* <tr>
            <td>3</td>
            <td><strong>Dr. G. S. Annie Grace Vimala</strong> <br />Professor <br />Biomedical Engineering and Image Processing</td>
            <td>annieagv27@gmail.com</td>
            <td>Saveetha School of Engineering, <br />SIMATS</td>
            <td>INDIA</td>
          </tr> */}
          <tr>
            <td>3</td>
            <td><strong>Dr. Shirley Selvan </strong> <br />Associate Professor<br></br>Machine Learning techniques, Medical Imaging,<br></br> Pattern Recognition
            </td>
            <td>shirleycharlethenry@gmail.com</td>
            <td>St Joseph's college of engineering,<br></br> OMR, Chennai -600119	</td>
            <td>INDIA</td>
          </tr>
          
          {/* <tr>
            <td>5</td>
            <td><strong>Dr. B. Vasudevan</strong> <br />Assistant Professor <br />Optical Devices, Medical Imaging, Photonics</td>
            <td>rithishvasu@gmail.com</td>
            <td>SRM Institute of Science & Technology, <br />SRM Nagar, Kattankulathur - 603203</td>
            <td>INDIA</td>
          </tr> */}
          {/* <tr>
            <td>5</td>
            <td><strong>Dr. S. Tephillah</strong> <br />Associate Professor <br />Cognitive Radio Networks and Machine Learning</td>
            <td>tephisam@gmail.com<br></br></td>
            <td>Department of Electronics and Communication Engineering, <br />St. Joseph's Institute of Technology, OMR, Chennai - 600119</td>
            <td>INDIA</td>
          </tr> */}
          <tr>
            <td>4</td>
            <td><strong>Dr. M. Senthil Murugan</strong> <br /> Associate Professor<br></br>Cryptography, Network Security</td>
            <td>senthilmuruganap@gmail.com</td>
            
            <td>St.Joseph's Institute of Technology, OMR, Chennai -600119</td>
            <td>INDIA</td>
          </tr>
          {/* <tr>
            <td>8</td>
            <td><strong>Dr. A. Maheshwari</strong> <br />Assistant Professor</td>
            <td>maheshwa1@srmist.edu.in</td>
            <td>Department of Computational Intelligence, <br />Faculty of Engineering and Technology, <br />SRM Institute of Science and Technology, <br />Kattankulathur – 603203, TamilNadu, India</td>
            <td>INDIA</td>
          </tr> */}
          <tr>
            <td>5</td>
            <td><strong>Dr. K. Vijayalakshmi</strong> <br />Assistant Professor</td>
            <td>vijaylak@srmist.edu.in</td>
            <td>Department of Computational Intelligence, <br />School of Computing, College of Engineering and Technology, <br />SRM Institute of Science and Technology, Kattankulathur, <br></br>Chennai - 603203</td>
            <td>INDIA</td>
          </tr>
          {/* <tr>
            <td>10</td>
            <td><strong>Dr. M. Karpagam</strong> <br />Assistant Professor</td>
            <td>karpagam1@srmist.edu.in</td>
            <td>Department of Computational Intelligence, <br />School of Computing, College of Engineering and Technology, <br />SRM Institute of Science and Technology, Kattankulathur, <br></br>Chennai - 603203</td>
            <td>INDIA</td>
          </tr> */}
          {/* <tr>
            <td>11</td>
            <td><strong>Dr. C. Senthilkumar</strong> <br />Professor <br />Wireless Sensor Networks, <br></br>Wireless Body Area Networks, <br></br>Computer Networks</td>
            <td>senswain@gmail.com</td>
            <td>Saveetha University</td>
            <td>INDIA</td>
          </tr> */}
          <tr>
            <td>6</td>
            <td><strong>Sai Sadhan Saravanan</strong> <br />Assistant Professor <br /> Master of Science in Information Systems Management, <br></br>Computer Networks</td>
            <td>saisadhan98@gmail.com</td>
            <td>Arizona State University,Arizona State,USA</td>
            <td>USA</td>
          </tr>
         
          {/* <tr>
            <td>13</td>
            <td><strong>Beckechen Ojong Marvin </strong> <br /> Mahendra Morang Adarsh Multiple Campus </td>
            <td>ojongmarvin@gmail.com</td>
            <td>Vice dean in the School of Engineering <br></br> FOMIC Polytechnic University<br></br>Cameroon  </td>
            <td>AFRICA</td>
          </tr> */}
          <tr>
            <td>7</td>
            <td><strong>Dr. R. Raman </strong> <br />Professor , Department of ECE<br></br> RF MEMS & Antennas </td>
            <td>ramanphdr@gmail.com</td>
            <td>Aditya College of Engineering and Technology <br></br>Surampalem Kakinada<br></br>Andhra Pradesh  </td>
            <td>INDIA</td>
          </tr>
          {/* <tr>
            <td>10</td>
            <td><strong>Sucheta Guruprasad</strong> <br />Associate Professor<br></br>Msc(Microelectronics and Microsystems) </td>
            <td>sucheta.guruprasad@tuhh.de</td>
            <td>Hamburg University of Technology <br></br>Surampalem Kakinada<br></br>Hamburg</td>
            <td>Germany</td>
          </tr> */}
          
          {/* <tr>
            <td>17</td>
            <td><strong> Juliyan Patrik Arockia Doss</strong> <br />Electrical Engineer<br></br>Advanced Manufacturing Engineering 
            </td>
            <td>juliyanpatrik@gmail.com</td>
            <td>Siemens Healthineers<br></br>  Hansen Way, Palo Alto, California- 94304</td>
            <td>USA</td>
          </tr> */}
         
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
