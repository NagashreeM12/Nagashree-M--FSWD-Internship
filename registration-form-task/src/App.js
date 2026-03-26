import React, { useState } from "react";

function App() {
  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // Message states
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset messages
    setError("");
    setSuccess("");

    // Validation
    if (!name || !email || !age) {
      setError("❌ All fields are required");
      return;
    }

    if (Number(age) < 18) {
      setError("❌ Age must be 18 or above");
      return;
    }

    // Success
    setSuccess("✅ Registration successful!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 Registration Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        {/* Age */}
        <div>
          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      {/* Conditional Rendering */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default App;