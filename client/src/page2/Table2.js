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
            <td><strong>Dr. J. Martin Leo Manickam</strong> <br />Professor <br />Wireless Communication</td>
            <td>josephmartin74@gmail.com</td>
            <td>Department of Electronics and Communication Engineering, <br />St. Joseph's College of Engineering, OMR, Chennai - 600119</td>
            <td>INDIA</td>
          </tr>
          <tr>
            <td>2</td>
            <td><strong>Dr. G. S. Annie Grace Vimala</strong> <br />Professor <br />Biomedical Engineering and Image Processing</td>
            <td>annieagv27@gmail.com</td>
            <td>Saveetha School of Engineering, <br />SIMATS</td>
            <td>INDIA</td>
          </tr>
          <tr>
            <td>3</td>
            <td><strong>Dr. G. S. Uthayakumar</strong> <br />Associate Professor <br />Biomedical Optical Engineering</td>
            <td>uthayakumar.g.1969@ieee.org</td>
            <td>Department of Electronics and Communication Engineering, <br />St. Joseph's Institute of Technology, OMR, Chennai - 600119</td>
            <td>INDIA</td>
          </tr>
          <tr>
            <td>4</td>
            <td><strong>Dr. B. Vasudevan</strong> <br />Assistant Professor <br />Optical Devices, Medical Imaging, Photonics</td>
            <td>rithishvasu@gmail.com</td>
            <td>SRM Institute of Science & Technology, <br />SRM Nagar, Kattankulathur - 603203</td>
            <td>INDIA</td>
          </tr>
          <tr>
            <td>5</td>
            <td><strong>Dr. S. Tephillah</strong> <br />Assistant Professor <br />Cognitive Radio Networks and Machine Learning</td>
            <td>tephisam@gmail.com</td>
            <td>Department of Electronics and Communication Engineering, <br />St. Joseph's Institute of Technology, OMR, Chennai - 600119</td>
            <td>INDIA</td>
          </tr>
          <tr>
            <td>6</td>
            <td><strong>Dr. A. Maheshwari</strong> <br />Assistant Professor</td>
            <td>Maheshwa1@srmist.edu.in</td>
            <td>Department of Computational Intelligence, <br />Faculty of Engineering and Technology, <br />SRM Institute of Science and Technology, <br />Kattankulathur – 603203, TamilNadu, India</td>
            <td>INDIA</td>
          </tr>
          <tr>
            <td>7</td>
            <td><strong>Dr. K. Vijayalakshmi</strong> <br />Assistant Professor</td>
            <td>vijaylak@srmist.edu.in</td>
            <td>Department of Computational Intelligence, <br />School of Computing, College of Engineering and Technology, <br />SRM Institute of Science and Technology, Kattankulathur, <br></br>Chennai - 603203</td>
            <td>INDIA</td>
          </tr>
          <tr>
            <td>8</td>
            <td><strong>Dr. M. Karpagam</strong> <br />Assistant Professor</td>
            <td>karpagam@srmist.edu.in</td>
            <td>Department of Computational Intelligence, <br />School of Computing, College of Engineering and Technology, <br />SRM Institute of Science and Technology, Kattankulathur, <br></br>Chennai - 603203</td>
            <td>INDIA</td>
          </tr>
          <tr>
            <td>9</td>
            <td><strong>Dr. C. Senthilkumar</strong> <br />Professor <br />Wireless Sensor Networks, <br></br>Wireless Body Area Networks, <br></br>Computer Networks</td>
            <td>senswain@gmail.com</td>
            <td>Saveetha University</td>
            <td>INDIA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
