import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [issue, setIssue] = useState("");
  const [volume, setVolume] = useState("");
  const [paperId, setPaperId] = useState("");
  const [totalPages, setTotalPages] = useState(""); // New state for Total Pages
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleUpload = async () => {
    if (!file || !issue || !volume || !paperId || !totalPages) { // Include totalPages in the validation
      setError("All fields are required");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(false);

    try {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;

      const response = await axios.post(
        "https://jcbeca.com/api/upload/get-signed-url",
        {
          file_name: file.name,
          Issue: parseInt(issue, 10),
          Volume: parseInt(volume, 10),
        }
      );

      if (response.status !== 200 || !response.data) {
        setError("Failed to get signed URL");
        setUploading(false);
        return;
      }

      const { signedURL } = response.data;

      if (!signedURL) {
        setError("Signed URL is undefined");
        setUploading(false);
        return;
      }

      await axios.put(signedURL, file, {
        headers: {
          "Content-Type": "application/octet-stream",
        },
      });

      await axios.put(
        "https://jcbeca.com/api/user/upload/update-upload-document",
        {
          Paper_Id: paperId,
          Volume: parseInt(volume, 10),
          Issue: parseInt(issue, 10),
          FileName: file.name,
          Date: currentDate.getDate(),
          Month: currentMonth,
          Year: currentYear,
          TotalPages: totalPages, // Include total pages in the API call
        }
      );

      setFile(null);
      setIssue("");
      setVolume("");
      setPaperId("");
      setTotalPages(""); // Reset totalPages after successful upload
      setSuccess(true);
    } catch (err) {
      setError("Error uploading file");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    // Cleanup if necessary
    return () => { };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Paper Id"
          value={paperId}
          onChange={handleInputChange(setPaperId)}
          className="text-md font-semibold bg-yellow-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Issue"
          value={issue}
          onChange={handleInputChange(setIssue)}
          className="text-md font-semibold bg-yellow-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Volume"
          value={volume}
          onChange={handleInputChange(setVolume)}
          className="text-md font-semibold bg-yellow-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Total Pages" // New input field for Total Pages
          value={totalPages}
          onChange={handleInputChange(setTotalPages)}
          className="text-md font-semibold bg-yellow-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="text-md font-semibold bg-yellow-300 rounded-lg p-2 mb-4 w-full"
        />
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="text-black text-sm font-bold p-2 bg-sky-300 rounded-lg w-full"
        >
          {uploading ? "Uploading..." : "Upload File"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && (
          <p className="text-green-500 mt-2 text-lg">File uploaded successfully!</p>
        )}
      </div>
    </div>
  );
};

export default UploadForm;
