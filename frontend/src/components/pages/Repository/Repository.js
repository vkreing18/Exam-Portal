import React, { useState } from "react";

function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFiles([...files, selectedFile]);
      localStorage.setItem(selectedFile, reader.result);
    };

    reader.readAsText(selectedFile);
  };

  const handleDeleteFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
    localStorage.removeItem(fileName);
  };

  return (
    <div class="position-absolute top-50 start-50 translate-middle">
      <div
        class="container bx form-control"
        style={{ height: "350px", width: "548px", border: "2px solid black" }}
      >
        <h1>UPLOAD HERE!</h1>
        <hr />
        <input type="file" onChange={handleFileUpload} />
        <hr />
        {files.map((file) => (
          
          <div className="my-2" key={file.name}>
            {file.name}{" "}
            <button
              class="btn btn-primary btn-sm"
              onClick={() => {
                const fileData = localStorage.getItem(file.name);
                const fileBlob = new Blob([fileData], { type: "text/plain" });
                const fileUrl = URL.createObjectURL(fileBlob);
                const link = document.createElement("a");
                link.href = fileUrl;
                link.download = file.name;
                link.click();
              }}
            >
              Download
            </button>{" "}
            <button
              class=" btn btn-primary  btn-sm"
              onClick={() => handleDeleteFile(file.name)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <FileUpload />
    </div>
  );
}
