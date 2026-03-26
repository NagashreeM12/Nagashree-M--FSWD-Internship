import React, { useState } from "react";

function App() {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";

    if (!form.email.includes("@"))
      newErrors.email = "Valid email required";

    if (Number(form.age) < 18)
      newErrors.age = "Age must be 18+";

    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("✅ Form submitted successfully!");
    } else {
      setSuccess("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📋 Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        {/* Email */}
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        {/* Age */}
        <div>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.age}</p>
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      {/* Success Message */}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default App;