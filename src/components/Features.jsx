import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      {/* Achievements Section */}
      <div className="feature-section achievements">
        <h3 className="section-title">Achievements</h3>
        <ul>
          <li>🏆 Ranked 1st among NITs by NIRF for nine consecutive years.</li>
          <li>🎖 "University of the Year" by FICCI in 2017.</li>
          <li>🔗 Best Industry-Linked NIT in India by CII in 2015.</li>
          <li>🚀 State-of-the-art research facilities and cutting-edge projects.</li>
        </ul>
      </div>


      {/* Upcoming/Ongoing Events Section */}
      <div className="feature-section events">
        <h3 className="section-title">Upcoming or Ongoing Events</h3>
        <ul>
          <li>📅 Annual Technical Symposium: TechTrichy 2024 (Jan 15-18).</li>
          <li>🤖 International Conference on Artificial Intelligence (Feb 10-12).</li>
          <li>💡 Hackathon 2024: "Innovate for Sustainability" (March 5).</li>
          <li>🎤 Guest Lecture Series by Industry Experts (Monthly).</li>
        </ul>
      </div>

      {/* Notice Board Section */}
      <div className="feature-section notice-board">
        <h3 className="section-title">Notice Board</h3>
        <ul>
          <li>📢 Fee payment deadline: Dec 31, 2024.</li>
          <li>🖋 Course registration for Spring Semester starts Jan 1, 2024.</li>
          <li>📜 Results for Fall Semester to be announced on Jan 10, 2024.</li>
          <li>🗓 New Student Orientation on Jan 5, 2024.</li>
        </ul>
      </div>

       {/* Quick Links */}
       <div className="feature-section quick-links">
        <h3 className="section-title">Quick Links</h3>
        <ul>
          <li><a href="/about">📖 About Us</a></li>
          <li><a href="/courses">📚 Courses</a></li>
          <li><a href="/contact">📞 Contact</a></li>
          <li><a href="/apply">📝 Apply Now</a></li>
        </ul>
      </div>

    </div>
  );
};

export default Features;
