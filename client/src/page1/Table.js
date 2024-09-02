import React from 'react';
import HomeCss from './style.module.css'

function Table() {
  return (
    <div className={HomeCss.tableBox}> 
      <h2>Areas Covered</h2>
      <p>Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA) is a scholarly peer-reviewed international scientific journal published Quarterly every year, focusing on theories, methods, and applications in communication and Biomedical Engineering  with Computer Science Engineering.</p>
      <p>In the fields of Communication, Biomedical Engineering along with Computer Science, JCBECA offers a dynamic platform for researchers, industry experts, engineers, managers, and policymakers to contribute and share pioneering work.</p>
      
      <table className={HomeCss.tableStyle}> 
        <thead>
          <tr>
            <th className={HomeCss.thStyle}>Topics on Communication Devices</th>
            <th className={HomeCss.thStyle}>Topics on Biomedical Engineering</th>
            <th className={HomeCss.thStyle}>Topics on Computer Science</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={HomeCss.tdStyle}>
              <ul >
                <li>Internet of Things (IoT)</li>
                <li>Mobile Edge Computing (MEC) and Fog Computing</li>
                <li>Wireless Internet</li>
                <li>Wireless Ad Hoc and Sensor Networks</li>
                <li>Wireless Mesh Networks</li>
                <li>Emerging wireless network security issues</li>
                <li>Wireless telemedicine and e-health</li>
                <li>Issues in 5G and Beyond (6G) Networks</li>
                <li>Cognitive Radio Systems & Software defined radio</li>
                <li>Wireless communications, monitoring, and diagnosis of networks</li>
                <li>Communication based on Biologically signals</li>
                <li>Cross-layer optimization</li>
                <li>Networks and wireless networks security issues</li>
              </ul>
            </td>
            <td className={HomeCss.tdStyle}>
              <ul >
                <li>Tissue Engineering and Regenerative Medicine</li>
                <li>Biomedical Imaging and Signal Processing</li>
                <li>Biomechanics and Rehabilitation Engineering</li>
                <li>Medical Devices and Robotics</li>
                <li>Neural Engineering and Brain-Computer Interfaces</li>
                <li>Bioinformatics and Computational Biology</li>
                <li>Cardiovascular Engineering</li>
                <li>Cancer Engineering</li>
                <li>Regulatory and Ethical Issues in Biomedical Engineering</li>
                <li>Bioinformatics and Genomics</li>
              </ul>
            </td>
            <td className={HomeCss.tdStyle}>
              <ul >
                <li>Generative Artificial Intelligence (AI)</li>
                <li>Large Language Model (LLM)</li>
                <li>Machine learning</li>
                <li>Deep learning</li>
                <li>Cyber Security</li>
                <li>Blockchain and Decentralized Technologies</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
