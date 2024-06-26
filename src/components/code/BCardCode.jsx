import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig/";
import Editor from "@monaco-editor/react";
const BCardCode = (txt) => {
  const [fileContent, setFileContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTextFile = async () => {
      try {
        const fileRef = ref(storage, "code/bcards.txt");
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
  }, []);

  if (loading) return <p className="text-black">Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className=" shadow-2xl shadow-blue-900"
      style={{ borderRadius: "18px", overflow: "hidden" }}
    >
      <Editor
        height="90vh"
        width="130vh"
        language="javascript"
        defaultValue="// loading text file..."
        value={fileContent}
        options={{
          readOnly: true, // make the editor read-only
          lineNumbers: "on", // show line numbers
          theme: "vs-dark", // use dark theme
        }}
      />
    </div>
  );
};

export default BCardCode;
