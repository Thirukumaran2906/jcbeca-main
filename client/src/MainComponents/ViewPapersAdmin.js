import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPapersAdmin = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await axios.get('https://jcbeca.com/api/user/upload/get-journal-user');
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
        {papers
          .filter(paper => paper.Status === 0)
          .map((paper) => (
            <div key={paper._id} className="bg-gray-900 rounded-lg shadow-md p-6 text-white">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">{paper.Title}</h2>
              <p className="mb-2"><strong>Paper-Id:</strong> {paper.PaperId}</p>
              <p className="mb-2"><strong>Abstract:</strong> {paper.Abstract}</p>
              <p className="mb-2"><strong>Research Area:</strong> {paper.ResearchArea}</p>
              <p className="mb-2"><strong>Application:</strong> {paper.Application}</p>
              <p className="mb-2"><strong>Paper Type:</strong> {paper.PaperType}</p>
              <p className="mb-2"><strong>Name:</strong> {paper.AuthorName}</p>
              <p className="mb-2"><strong>Email:</strong> {paper.AuthorEmail}</p>
              <p className="mb-2"><strong>Department:</strong> {paper.AuthorDepartment}</p>
              <p className="mb-2"><strong>Institution:</strong> {paper.AuthorInstitution}</p>
              <p className="mb-2"><strong>Country:</strong> {paper.AuthorCountry}</p>
              <p className="mb-2"><strong>Phone:</strong> {paper.ContactNumber}</p>
              <p className="mb-2"><strong>Status:</strong> {paper.Status === 0 ? 'Pending' : 'Approved'}</p>
              <a 
                  href={paper.FilePath} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-yellow-400 hover:text-yellow-500 underline"
                  download
                >
                  Download/View Paper
                </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ViewPapersAdmin;
