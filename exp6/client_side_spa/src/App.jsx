import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    // Must contain @ and end with .com, .in or any country code (2+ letters)
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|[a-zA-Z]{2,})$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const errors = [];

    if (!/^[A-Z]/.test(password)) {
      errors.push("Password must start with a capital letter.");
    }
    if (!/\d/.test(password)) {
      errors.push("Password must contain at least one number.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("Password must contain at least one special character.");
    }
    if (password.length < 5) {
      errors.push("Password must be at least 5 characters long.");
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    let formErrors = {};

    if (!validateEmail(email)) {
      formErrors.email =
        "Invalid email. Must contain @ and end with .com, .in or valid country code.";
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      formErrors.password = passwordErrors;
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSuccess("Form submitted successfully!");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container">
      <h2>Client-Side Form Validation</h2>

      <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
          <label>Email ID</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          {errors.password &&
            errors.password.map((err, index) => (
              <p key={index} className="error">
                {err}
              </p>
            ))}
        </div>

        <button type="submit">Submit</button>

        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default App;