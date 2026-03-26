const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Student API 🚀");
});

app.get("/students", (req, res) => {
  res.json([
    { name: "Amit", course: "AI" },
    { name: "Riya", course: "FullStack" },
    { name: "Rahul", course: "DataScience" }
  ]);
});

app.get("/courses", (req, res) => {
  res.json(["AI", "ML", "FullStack", "DataScience"]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});