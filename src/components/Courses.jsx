import React from "react";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses-container">
      <h1 className="courses-heading">Available Courses at NIT Trichy</h1>

      {/* Masters Section */}
      <div className="course-level">
        <h2>Master's Programs (M.Tech, MCA)</h2>
        <p>Our postgraduate programs are designed to provide specialized knowledge in cutting-edge technologies.</p>
        <div className="course-department">
          <h3>Departments Offering M.Tech</h3>
          <ul>
            <li><a href="#">Computer Science Engineering</a></li>
            <li><a href="#">Electronics and Communication Engineering</a></li>
            <li><a href="#">Mechanical Engineering</a></li>
            <li><a href="#">Civil Engineering</a></li>
          </ul>

          <h3>Departments Offering MCA</h3>
          <ul>
            <li><a href="#">Master of Computer Applications (MCA)</a></li>
          </ul>
        </div>
      </div>

      {/* Bachelors Section */}
      <div className="course-level">
        <h2>Bachelor's Programs (B.Tech)</h2>
        <p>Our undergraduate programs offer a comprehensive foundation in various engineering fields.</p>
        <div className="course-department">
          <h3>Departments Offering B.Tech</h3>
          <ul>
            <li><a href="#">Computer Science Engineering</a></li>
            <li><a href="#">Electronics and Communication Engineering</a></li>
            <li><a href="#">Civil Engineering</a></li>
            <li><a href="#">Mechanical Engineering</a></li>
            <li><a href="#">Chemical Engineering</a></li>
            <li><a href="#">Electrical and Electronics Engineering</a></li>
            <li><a href="#">Biotechnology</a></li>
            <li><a href="#">Information Technology</a></li>
          </ul>
        </div>
      </div>

      {/* PhD Section */}
      <div className="course-level">
        <h2>Ph.D. Programs</h2>
        <p>Our Ph.D. programs are offered across various disciplines, focusing on innovative research and development.</p>
        <div className="course-department">
          <h3>Departments Offering Ph.D.</h3>
          <ul>
            <li><a href="#">Computer Science and Engineering</a></li>
            <li><a href="#">Electronics and Communication Engineering</a></li>
            <li><a href="#">Mechanical Engineering</a></li>
            <li><a href="#">Civil Engineering</a></li>
            <li><a href="#">Chemical Engineering</a></li>
            <li><a href="#">Biotechnology</a></li>
            <li><a href="#">Mathematics</a></li>
            <li><a href="#">Physics</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
