import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [volume, setVolume] = useState("");
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [polling, setPolling] = useState(false);
  const intervalRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
    setFile(selectedFile);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleUpload = async () => {
    if (!file || !name || !topic || !volume) {
      setError("All fields are required");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(false);

    try {
      const currentDate = new Date();
      const currentYear = Number(currentDate.getFullYear());
      const currentMonth = Number(currentDate.getMonth() + 1);

      const response = await axios.post(
        "https://54.80.252.150:8080/api/upload/get-signed-url",
        {
          file_name: file.name,
          Name: name,
          Topic: topic,
          Volume: volume,
          Date: Number(currentDate.getDate()),
          Month: currentMonth,
          Year: currentYear,
        }
      );

      console.log("Response from get-url:", response);

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

      console.log("Signed URL:", signedURL);

      intervalRef.current = setInterval(async () => {
        try {
          const statusResponse = await axios.put(
            "http://54.80.252.150:8080/api/upload/update-upload-status", { key : key}
          );
          console.log("Upload status:", statusResponse);
        } catch (statusError) {
          console.error("Error checking upload status:", statusError);
        }
      }, 1000);

      const uploadPdf = await axios.put(signedURL, file, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      clearInterval(intervalRef.current);

      setName("");
      setFile(null);
      setTopic("");
      setVolume("");
      setUploading(false);
      setSuccess(true);
      setError(null);
      setPolling(false);
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
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className="text-md font-semibold bg-yellow-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={handleTopicChange}
          className="text-md font-semibold bg-yellow-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="text"
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
        {polling && <p className="text-blue-500 mt-2">...</p>}
        {success && !polling && (
          <p className="text-green-500 mt-2 text-lg">File uploaded successfully!</p>
        )}
      </div>
    </div>
  );
};

export default UploadForm;
