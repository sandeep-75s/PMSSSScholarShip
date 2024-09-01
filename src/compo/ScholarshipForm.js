import React, { useState } from "react";
import "./ScholarshipForm.css"; 

const ScholarshipForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    qualification: "",
    school: "",
    passingYear: "",
    tenthMarksheet: null,
    twelfthMarksheet: null,
    board: "",
    leadershipExperience: ""
  });

  const [filePreviews, setFilePreviews] = useState({
    tenthMarksheet: null,
    twelfthMarksheet: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setFormData({ ...formData, [name]: file });

    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFilePreviews({ ...filePreviews, [name]: fileURL });
    }
  };

    const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Form Data:", formData);
  
    if (filePreviews.tenthMarksheet) {
      console.log("10th Marksheet URL:", filePreviews.tenthMarksheet);
    }
    if (filePreviews.twelfthMarksheet) {
      console.log("12th Marksheet URL:", filePreviews.twelfthMarksheet);
    }
  
    Object.values(filePreviews).forEach((url) => URL.revokeObjectURL(url));
  };
  

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Pradhan Mantri's Special Scholarship Scheme (PMSSS) Application Form</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">E-Mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone No.</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Address Line 1</label>
        <textarea
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          required
          className="form-textarea address-line"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Address Line 2</label>
        <textarea
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          className="form-textarea address-line"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">State / Province</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Postal / Zip Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Highest Qualification</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">School / College</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Year of Passing</label>
          <input
            type="text"
            name="passingYear"
            value={formData.passingYear}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="file-input-label">
            10th Marksheet
            <input
              type="file"
              name="tenthMarksheet"
              accept=".pdf"
              onChange={handleFileChange}
              required
              className="file-input"
            />
          </label>
          
          {filePreviews.tenthMarksheet && (
            <div>
              <p>10th Marksheet Preview:</p>
              {formData.tenthMarksheet.type.includes("image") ? (
                <img
                  src={filePreviews.tenthMarksheet}
                  alt="10th Marksheet"
                  style={{ maxWidth: "200px" }}
                />
              ) : (
                <a
                  href={filePreviews.tenthMarksheet}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View 10th Marksheet (PDF)
                </a>
              )}
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="file-input-label">
            12th Marksheet
            <input
              type="file"
              name="twelfthMarksheet"
              accept=".pdf"
              onChange={handleFileChange}
              required
              className="file-input"
            />
          </label>
          {/* File preview for 12th Marksheet */}
          {filePreviews.twelfthMarksheet && (
            <div>
              <p>12th Marksheet Preview:</p>
              {formData.twelfthMarksheet.type.includes("image") ? (
                <img
                  src={filePreviews.twelfthMarksheet}
                  alt="12th Marksheet"
                  style={{ maxWidth: "200px" }}
                />
              ) : (
                <a
                  href={filePreviews.twelfthMarksheet}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View 12th Marksheet (PDF)
                </a>
              )}
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Select The Board</label>
          <select
            name="board"
            value={formData.board}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="" disabled>
              Select The Board
            </option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State Board">State Board</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Leadership Experiences</label>
        <textarea
          name="leadershipExperience"
          value={formData.leadershipExperience}
          onChange={handleChange}
          className="form-textarea"
          style={{ height: "100px" }}
        />
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default ScholarshipForm;
