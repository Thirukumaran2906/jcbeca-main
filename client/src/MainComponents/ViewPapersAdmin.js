import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPapersAdmin = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/user/upload/get-journal-user');
        setPapers(response.data);
      } catch (error) {
        console.error('Error fetching papers:', error);
      }
    };

    fetchPapers();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">Papers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {papers.map((paper) => (
          <div key={paper._id} className="bg-gray-900 rounded-lg shadow-md p-6 text-white">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">{paper.Title}</h2>
            <p className="mb-2"><strong>Paper-Id</strong> {paper.Paper_Id}</p>
            <p className="mb-2"><strong>Abstract:</strong> {paper.Abstract}</p>
            <p className="mb-2"><strong>Research Area:</strong> {paper.Research_Area}</p>
            <p className="mb-2"><strong>Application:</strong> {paper.Application}</p>
            <p className="mb-2"><strong>Paper Type:</strong> {paper.Paper_Type}</p>
            <p className="mb-2"><strong>Country:</strong> {paper.Country}</p>
            <p className="mb-2"><strong>State:</strong> {paper.State}</p>
            <p className="mb-2"><strong>City:</strong> {paper.City}</p>
            <p className="mb-2"><strong>Number:</strong> {paper.Contact_Number}</p>
            <p className="mb-2"><strong>Address:</strong> {paper.Address_1}, {paper.Address_2}</p>
            <p className="mb-2"><strong>Zip Code:</strong> {paper.Zip_Code}</p>
            <p className="mb-2"><strong>Status:</strong> {paper.Status === 1 ? 'Approved' : 'Pending'}</p>
            <a 
              href={paper.File_Path} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-yellow-400 hover:text-yellow-500 underline"
            >
              View Paper
            </a>
            <div className="mt-4">
              <h3 className="font-semibold text-yellow-300">Authors</h3>
              {paper.Author_Names.map((name, index) => (
                <div key={index} className="mb-2">
                  <p><strong>Name:</strong> {name}</p>
                  <p><strong>Email:</strong> {paper.Author_Emails[index]}</p>
                  <p><strong>Department:</strong> {paper.Author_Departments[index]}</p>
                  <p><strong>Institution:</strong> {paper.Author_Institutions[index]}</p>
                  <p><strong>Country:</strong> {paper.Author_Countrys[index]}</p>
                  <p><strong>Phone:</strong> {paper.Author_Numbers[index]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPapersAdmin;
