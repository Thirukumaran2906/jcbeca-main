import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiX, FiMaximize2, FiMinimize2 } from 'react-icons/fi';

const DocIframe = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pdfUrl } = location.state || {};
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  if (!pdfUrl) {
    return <p className="text-center text-red-500">No PDF available</p>;
  }

  // Function to handle closing or navigating back
  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  // Function to toggle full screen mode
  const handleFullScreenToggle = () => {
    const iframeElement = document.querySelector('iframe');
    if (!isFullScreen) {
      iframeElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="relative container mx-auto mt-8 px-4">
      {/* Header with title and buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg shadow-lg sticky top-0 z-50">
        <h1 className="text-lg sm:text-2xl font-semibold tracking-wide mb-2 sm:mb-0 text-center">
          PDF Document Viewer
        </h1>
        <div className="flex space-x-2 sm:space-x-4">
          {/* Fullscreen Toggle Button */}
          <button
            onClick={handleFullScreenToggle}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-3 sm:px-4 rounded-md shadow-md transition-transform transform hover:scale-105 flex items-center text-sm sm:text-base"
          >
            {isFullScreen ? (
              <>
                <FiMinimize2 className="mr-1 sm:mr-2" /> Exit Fullscreen
              </>
            ) : (
              <>
                <FiMaximize2 className="mr-1 sm:mr-2" /> Fullscreen
              </>
            )}
          </button>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 sm:px-4 rounded-md shadow-md transition-transform transform hover:scale-105 flex items-center text-sm sm:text-base"
          >
            <FiX className="mr-1 sm:mr-2" /> Close
          </button>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <div className="relative bg-gray-50 border border-gray-300 rounded-b-lg shadow-lg overflow-hidden mt-4">
        <iframe
          src={pdfUrl}
          width="100%"
          height="500px"
          title="PDF Viewer"
          className="rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:shadow-xl sm:h-[800px]"
        ></iframe>
      </div>

      {/* Footer for additional information */}
      <div className="bg-gray-200 text-gray-700 p-4 rounded-b-lg mt-2 text-center shadow-md">
        <p className="text-sm sm:text-base">
          Use the Fullscreen option for better viewing experience. You can also
          return to the previous page using the Close button.
        </p>
      </div>
    </div>
  );
};

export default DocIframe;
