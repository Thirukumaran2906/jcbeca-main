import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DocumentDetails = () => {
  const [documentData, setDocumentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { volumeNumber, issue } = useParams();

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const response = await axios.post('https://jcbeca.com/api/user/upload/getfiles', {
          volumeNumber,
          issue
        });
        setDocumentData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching document data');
        setLoading(false);
      }
    };

    fetchDocumentData();
  }, [volumeNumber, issue]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Document Details</h1>
      <p className="text-xl text-center mb-4">Volume Number: {volumeNumber}</p>
      <p className="text-xl text-center mb-8">Issue: {issue}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentData.map((document, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-2">{document.Title}</h2>
            <p className="text-sm mb-2 text-black"><strong>Authors:</strong> {document.Author_Names.join(', ')}</p>
            <p className="text-sm mb-2 text-black"><strong>DOI: </strong>#######</p>
            <a 
              href={document.Journal_File_Path} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white text-center py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
            >
              View Journal File
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentDetails;
