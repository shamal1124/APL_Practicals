// webApp.js

// Import express module
const express = require("express");

// Create express app
const app = express();
const PORT = 3000;

// Middleware for JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("<h2>Welcome to the Web-based Node.js Application </h2>");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is a simple Node.js app built using Express framework!");
});

// POST route example
app.post("/register", (req, res) => {
  const { name } = req.body;
  res.send(`User ${name} registered successfully!`);
});

// Start the server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
