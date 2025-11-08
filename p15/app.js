// app.js

// Import express
const express = require("express");
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
  const title = "Welcome to Express.js Template Demo 🚀";
  const message = "This page is rendered using EJS template engine.";
  res.render("index", { title, message });
});

// About route
app.get("/about", (req, res) => {
  const info = {
    name: "Express Template Example",
    author: "Shamal Gaykwad",
    description: "Demonstrating dynamic web pages using EJS templates."
  };
  res.render("about", { info });
});

// Form page (GET)
app.get("/form", (req, res) => {
  res.render("form");
});

// Handle form submission (POST)
app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.render("index", { title: "Form Submitted ✅", message: `Hello ${name}, your email is ${email}` });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
