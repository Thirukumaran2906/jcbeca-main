import React, { useState } from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";

const Volumes = () => {
  const volumeData = [
    { volumeNumber: 1, volumeName: 'JCBECA Volume - 1 (2024)', issues: ['Issue 1 - [MAY - AUGUST]','Issue 2 - [SEPTEMBER  - DECEMBER]'] }
  ];
// ['Issue 1', 'Issue 2', 'Isssue 3', 'Issue 4'] 
  const [expandedVolume, setExpandedVolume] = useState(null);

  const toggleVolume = (volumeName) => {
    setExpandedVolume(expandedVolume === volumeName ? null : volumeName);
  };

  return (
    <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA)</h1>

      <h1 className="text-3xl font-bold mb-8 text-center">JCBECA Volumes</h1>
      {volumeData.map((volume, index) => (
        <div key={index} className="mb-4">
          <div
            className={`bg-yellow-300 rounded-lg overflow-hidden shadow-md transition-height duration-300 ${
              expandedVolume === volume.volumeName ? 'h-auto' : 'h-16'
            }`}
          >
            <div
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleVolume(volume.volumeName)}
            >
              <h2 className="text-lg font-semibold text-black">{volume.volumeName}</h2>
              <div className={`transform ${expandedVolume === volume.volumeName ? 'rotate-180' : ''}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={expandedVolume === volume.volumeName ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
                  />
                </svg>
              </div>
            </div>
            {expandedVolume === volume.volumeName && (
              <ul className="p-4">
                {volume.issues.map((issue, issueIndex) => (
                  <li key={issueIndex} className="text-base text-gray-800 flex items-center">
                    <div className="w-4 h-4 mr-2">
                      <IoMdArrowRoundForward />
                    </div>
                    <a
                      href={`/documents/${volume.volumeNumber}/${issueIndex + 1}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600"
                    >
                      {issue}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Volumes;
