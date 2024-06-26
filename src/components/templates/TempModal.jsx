import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig/";
import Editor from "@monaco-editor/react";

const TempModal = ({ isOpen, onClose, page }) => {
  if (!isOpen) return null;

  const [fileContent, setFileContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTextFile = async () => {
      let filePath = "";

      switch (page) {
        case "Temp1":
          filePath = "templates/Temp1.txt";
          break;
        case "Temp2":
          filePath = "templates/Temp2.txt";
          break;
        case "Temp3":
          filePath = "templates/Temp3.txt";
          break;
        case "Temp4":
          filePath = "templates/Temp4.txt";
          break;
        case "Temp5":
          filePath = "templates/Temp5.txt";
          break;
        case "Temp6":
          filePath = "templates/Temp6.txt";
          break;
        case "Temp7":
          filePath = "templates/Temp7.txt";
          break;
        case "Temp8":
          filePath = "templates/Temp8.txt";
          break;
        default:
          filePath = "templates/default.txt";
          break;
      }

      try {
        const fileRef = ref(storage, filePath);
        const url = await getDownloadURL(fileRef);
        const response = await fetch(url);
        const text = await response.text();
        setFileContent(text);
        setLoading(false);
      } catch (err) {
        setError("Failed to load the file");
        setLoading(false);
        console.error(err);
      }
    };

    fetchTextFile();
  }, [page]);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-3xl md:max-w-4xl lg:max-w-5xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          &times;
        </button>

        <div
          className="shadow-2xl shadow-blue-900 mt-4"
          style={{ borderRadius: "18px", overflow: "hidden" }}
        >
          <Editor
            height="60vh" // Adjusted height for better responsiveness
            width="100%"
            language="javascript"
            defaultValue="// loading text file..."
            value={fileContent}
            options={{
              readOnly: true,
              lineNumbers: "on",
              theme: "vs-dark",
            }}
          />
        </div>

        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TempModal;
