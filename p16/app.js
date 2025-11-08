const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Student = require("./models/student");

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Error connecting MongoDB:", err));

// Routes
app.get("/", async (req, res) => {
  const students = await Student.find();
  res.render("index", { students });
});

// Add Student Form
app.get("/add", (req, res) => {
  res.render("add");
});

// Add Student (POST)
app.post("/add", async (req, res) => {
  const { name, email, course, marks } = req.body;
  await Student.create({ name, email, course, marks });
  res.redirect("/");
});

// Edit Student Form
app.get("/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("edit", { student });
});

// Update Student
app.post("/edit/:id", async (req, res) => {
  const { name, email, course, marks } = req.body;
  await Student.findByIdAndUpdate(req.params.id, { name, email, course, marks });
  res.redirect("/");
});

// Delete Student
app.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
