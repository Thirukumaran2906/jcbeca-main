import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [issue, setIssue] = useState("");
  const [volume, setVolume] = useState("");
  const [paperId, setPaperId] = useState("");
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
    setFile(selectedFile);
  };

  const handleIssueChange = (e) => {
    setIssue(e.target.value);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handlePaperIdChange = (e) => {
    setPaperId(e.target.value);
  };

  const handleUpload = async () => {
    if (!file || !issue || !volume || !paperId) {
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
        "http://3.93.68.228:8080/api/upload/get-signed-url",
        {
          file_name: file.name,
          Issue: parseInt(issue, 10),
          Volume: parseInt(volume, 10),
          Date: currentDate.getDate(),
          Month: currentMonth,
          Year: currentYear,
        }
      );

      if (response.status !== 200 || !response.data) {
        setError("Failed to get signed URL, received unexpected response");
        setUploading(false);
        return;
      }

      const { signedURL, key } = response.data;

      if (!signedURL) {
        setError("Signed URL is undefined");
        setUploading(false);
        return;
      }

      intervalRef.current = setInterval(async () => {
        try {
          const statusResponse = await axios.put(
            "http://3.93.68.228:8080/api/upload/update-upload-status",
            { key }
          );
          console.log("Upload status:", statusResponse);
        } catch (statusError) {
          console.error("Error checking upload status:", statusError);
        }
      }, 1000);

      await axios.put(signedURL, file, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      clearInterval(intervalRef.current);

      await axios.put(
        "http://localhost:8080/api/user/upload/update-upload-document",
        {
          Paper_Id: paperId,
          Volume: parseInt(volume, 10),
          Issue: parseInt(issue, 10),
          FileName: file.name,
        }
      );

      setFile(null);
      setIssue("");
      setVolume("");
      setPaperId("");
      setUploading(false);
      setSuccess(true);
      setError(null);
      console.log("File uploaded successfully!");
    } catch (err) {
      clearInterval(intervalRef.current);
      console.error("Error uploading file:", err);
      setError("Error uploading file");
      setUploading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Paper Id"
          value={paperId}
          onChange={handlePaperIdChange}
          className="text-md font-semibold bg-yellow-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Issue"
          value={issue}
          onChange={handleIssueChange}
          className="text-md font-semibold bg-yellow-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Volume"
          value={volume}
          onChange={handleVolumeChange}
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
        {success && <p className="text-green-500 mt-2 text-lg">File uploaded successfully!</p>}
      </div>
    </div>
  );
};

export default UploadForm;
