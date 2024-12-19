import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ApplicationForm from "./components/ApplicationForm";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/application-form" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
