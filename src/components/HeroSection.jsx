import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application-form"); // Redirect to the application form route
  };

  return (
    <div className="hero-section">
      <h1>Welcome to NIT Trichy eCampus</h1>
      <p>Empowering M.Tech students with a comprehensive online learning platform.</p>
      <button className="apply-button" onClick={handleApplyClick}>
        Apply Now
      </button>
    </div>
  );
};

export default HeroSection;
