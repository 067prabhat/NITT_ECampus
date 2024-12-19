import React, { useState } from "react";
import "./ApplicationForm.css";

const ApplicationForm = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    course: "",
    dob: "",
    fatherName: "",
    motherName: "",
    aadhaar: "",
    mobile: "",
    tenthMarks: "",
    twelfthMarks: "",
    graduationMarks: "",
    instituteName: "",
    passingYear: "",
  });

  const courses = {
    Bachelor: [
      "Computer Science Engineering",
      "Electronics and Communication Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
    ],
    Master: [
      "Computer Science Engineering",
      "Electronics and Communication Engineering",
      "Mechanical Engineering",
      "MCA",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setPage(page + 1);

  const handleBack = () => setPage(page - 1);

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="application-form">
      {page === 1 && (
        <div className="form-page">
          <h2>Application Form - Step 1</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Program:</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
            >
              <option value="">Select Program</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
            </select>
          </div>
          {formData.program && (
            <div className="form-group">
              <label>Course:</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select Course</option>
                {courses[formData.program].map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <button className="next-button" onClick={handleNext}>
            Save and Next
          </button>
        </div>
      )}

      {page === 2 && (
        <div className="form-page">
          <h2>Application Form - Step 2</h2>
          <div className="form-group">
            <label>Father's Name:</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mother's Name:</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Aadhaar Number:</label>
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
          <button className="next-button" onClick={handleNext}>
            Save and Next
          </button>
        </div>
      )}

      {page === 3 && (
        <div className="form-page">
          <h2>Application Form - Step 3</h2>
          <div className="form-group">
            <label>10th Marks:</label>
            <input
              type="text"
              name="tenthMarks"
              value={formData.tenthMarks}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>12th Marks:</label>
            <input
              type="text"
              name="twelfthMarks"
              value={formData.twelfthMarks}
              onChange={handleChange}
              required
            />
          </div>
          {formData.program === "Master" && (
            <>
              <div className="form-group">
                <label>Graduation Marks:</label>
                <input
                  type="text"
                  name="graduationMarks"
                  value={formData.graduationMarks}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Institute Name:</label>
                <input
                  type="text"
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Passing Year:</label>
                <input
                  type="text"
                  name="passingYear"
                  value={formData.passingYear}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
