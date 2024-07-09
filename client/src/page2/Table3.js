import React from 'react';
import CSS from './page2.module.css'
function Table3() {
  return (
    <div className={CSS.tableBox2}>
      <h2>Editorial Board Members</h2>
      <table>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>-------------</td>
            <td>----------------</td>
            <td>------------------</td>
            <td>--------------------</td>
          </tr>
          <tr>
            <td>2</td>
            <td>---------------</td>
            <td>-------------------</td>
            <td>--------------------</td>
            <td>--------------</td>
          </tr>
          {/* <tr>
            <td>3</td>
            <td>Michael Johnson</td>
            <td>michael.johnson@example.com</td>
            <td>789 Pine St, City</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Emily Davis</td>
            <td>emily.davis@example.com</td>
            <td>101 Maple St, City</td>
            <td>Australia</td>
          </tr>
          <tr>
            <td>5</td>
            <td>David Brown</td>
            <td>david.brown@example.com</td>
            <td>202 Birch St, City</td>
            <td>India</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Table3;
