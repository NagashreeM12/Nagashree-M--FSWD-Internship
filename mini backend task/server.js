const express = require("express");

const app = express();
const PORT = 3000;

// Function to get current date & time
const getDateTime = () => {
  return new Date().toLocaleString();
};

// Home Route
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to My Website 🌐</h1>
    <p>Current Date & Time: ${getDateTime()}</p>
  `);
});

// About Route
app.get("/about", (req, res) => {
  res.send(`
    <h1>About Us</h1>
    <p>This is a mini backend website built using Node.js</p>
    <p>${getDateTime()}</p>
  `);
});

// Services Route
app.get("/services", (req, res) => {
  res.send(`
    <h1>Our Services</h1>
    <ul>
      <li>Web Development</li>
      <li>AI Solutions</li>
      <li>Full Stack Projects</li>
    </ul>
    <p>${getDateTime()}</p>
  `);
});

// Contact Route
app.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <p>Email: example@gmail.com</p>
    <p>Phone: 1234567890</p>
    <p>${getDateTime()}</p>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});