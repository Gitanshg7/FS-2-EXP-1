import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    skills: [],
    address: "",
    state: "",
    age: ""
  });

  const statesList = ["California", "Texas", "Florida", "New York", "Illinois"];
  const skillsList = ["HTML", "CSS", "JavaScript", "React"];

  // Calculate age from DOB
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age < 0 ? 0 : age; // Prevent negative age
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If DOB changes → calculate age
    if (name === "dob") {
      const calculatedAge = calculateAge(value);

      setFormData((prev) => ({
        ...prev,
        dob: value,
        age: calculatedAge
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const details = `
      User Details:

      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Gender: ${formData.gender}
      Date of Birth: ${formData.dob}
      Age: ${formData.age}
      State: ${formData.state}
      Skills: ${formData.skills.join(", ")}
      Address: ${formData.address}
  `;

    alert(details);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      skills: [],
      address: "",
      state: "",
      age: ""
    });
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2>User Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="inline-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}  // Prevent future dates
              />
            </div>

            <div className="form-group">
              <label>Skills</label>
              <div className="inline-group">
                {skillsList.map((skill) => (
                  <label key={skill}>
                    <input
                      type="checkbox"
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={handleCheckboxChange}
                    />
                    {skill}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                {statesList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Age Auto Calculated */}
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                readOnly
              />
            </div>

            <div className="form-group full-width">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="button-group">
              <button type="submit">Submit</button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;