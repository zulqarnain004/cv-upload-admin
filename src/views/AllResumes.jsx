import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import styled from "styled-components";

const getFileIcon = (fileName) => {
  const extension = fileName.split(".").pop();
  if (extension === "pdf") {
    return "pdf_icon.png";
  } else if (extension === "doc" || extension === "docx") {
    return "word_icon.png";
  }
  return "generic_icon.png"; // for generic icon
};

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

const AllResumes = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const listRef = ref(storage, "files/");
        const res = await listAll(listRef);
        const promises = res.items.map(async (item) => {
          const downloadUrl = await getDownloadURL(item);
          return { name: item.name, url: downloadUrl };
        });
        const filesData = await Promise.all(promises);
        const metadataPromises = res.items.map(item => getMetadata(item));
        const metadataList = await Promise.all(metadataPromises);
        const filesWithMetadata = filesData.map((file, index) => ({
          ...file,
          creationTime: metadataList[index].timeCreated
        }));
        setFiles(filesWithMetadata.reverse());
      } catch (error) {
        console.error("Error fetching files:", error.message);
      }
    };

    fetchFiles();
  }, []);

  
  return (
    <>
      <FileListContainer>
        {files.map((file, index) => (
          <FileItem key={index}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              <FileIcon src={getFileIcon(file.name)} alt="file icon" />
              <FileName>{file.name}</FileName>
              <FileDate>Created: {formatDate(file.creationTime)}</FileDate>
            </a>
          </FileItem>
        ))}
      </FileListContainer>
    </>
  );
};

export default AllResumes;

const FileListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const FileItem = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
`;

const FileName = styled.p`
  margin: 10px;
`;

const FileDate = styled.p`
  margin: 5px 0;
  font-size: 0.8em;
`;

const FileIcon = styled.img`
  width: 100px;
`;
