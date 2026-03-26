const express = require("express");

const app = express();
const PORT = 3000;

// Home route (Mini website)
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Student API Server 🚀</h1>");
});

// Students route
app.get("/students", (req, res) => {
  const students = [
    { name: "Amit", course: "AI" },
    { name: "Riya", course: "FullStack" },
    { name: "Rahul", course: "DataScience" },
  ];

  res.json(students);
});

// Courses route
app.get("/courses", (req, res) => {
  const courses = ["AI", "ML", "FullStack", "DataScience"];

  res.json(courses);
});

// About route
app.get("/about", (req, res) => {
  res.send("<h2>This is a mini backend website</h2>");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});