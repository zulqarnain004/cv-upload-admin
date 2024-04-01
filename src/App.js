import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import AllResumes from "./views/AllResumes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/all-resumes" element={<AllResumes />} />
      </Routes>
    </>
  );
}

export default App;
