import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DocumentDetails = () => {
  const [documentData, setDocumentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { volumeNumber, issue } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const response = await axios.post('https://jcbeca.com/api/user/upload/getfiles', {
          volumeNumber,
          issue,
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

  // Pagination Handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch data for the new page if needed.
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA)
      </h1>
      <p className="text-xl text-center mb-4">May - August - 2024</p>
      <p className="text-xl text-center mb-4">Volume Number: {volumeNumber}</p>
      <p className="text-xl text-center mb-8">Issue: {issue}</p>
      

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentData.map((document, index) => (
          <div
            key={index}
            className="flex flex-col border p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            {/* Volume and Issue Row */}
            <div className="bg-gray-200 text-gray-700 text-sm p-2 rounded-t-lg">
              Volume: {volumeNumber} | Issue: {issue}
            </div>

            {/* Document Info */}
            <div className="mt-2 flex-grow">
              <h2 className="text-2xl font-semibold mb-2">{document.Title}</h2>
              <p className="text-sm mb-2 text-black"><strong>Author:</strong> {document.AuthorName}</p>
              <p className="text-sm mb-2 text-black"><strong>DOI:</strong> N/A</p>
              
              <p className="text-sm mb-2 text-black">
  <strong>Pages :</strong> {document.Pages.toString().length === 3
    ? `${document.Pages.toString().substring(0, 1)} - ${document.Pages.toString().substring(1, 3)}` // For 3-digit numbers
    : `${document.Pages.toString().substring(0, 2)} - ${document.Pages.toString().substring(2, 4)}` // For 4-digit numbers
  }
</p>

            </div>

            {/* Button at Bottom */}
            <a
              href={document.JournalFilePath}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white text-center py-2 rounded mt-auto hover:bg-blue-600 transition-colors duration-300 ease-in-out"
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
