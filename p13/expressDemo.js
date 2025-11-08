// Step 1: Import express and middleware
const express = require("express");
const morgan = require("morgan"); // for logging
const cors = require("cors");

// Step 2: Create Express app
const app = express();

// Step 3: Middleware setup
app.use(cors());
app.use(express.json()); // parse JSON
app.use(morgan("dev")); // log requests in console

// Step 4: In-memory data (acting as a mini database)
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

// Step 5: Define routes

// Default route
app.get("/", (req, res) => {
  res.send("<h1>🚀 Welcome to the Advanced Express.js Demo</h1><p>Use /api/users to interact.</p>");
});

// Fetch all users
app.get("/api/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "All users fetched successfully!",
    data: users,
  });
});

// Fetch a single user by ID
app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found!" });
  }
  res.json({ success: true, data: user });
});

// Register a new user (POST)
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, message: "Name and Email required!" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json({
    success: true,
    message: "User registered successfully!",
    data: newUser,
  });
});

// Update user info (PUT)
app.put("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found!" });
  }

  user.name = name || user.name;
  user.email = email || user.email;

  res.json({
    success: true,
    message: "User updated successfully!",
    data: user,
  });
});

// Delete user (DELETE)
app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ success: false, message: "User not found!" });
  }

  const deletedUser = users.splice(userIndex, 1);
  res.json({
    success: true,
    message: "User deleted successfully!",
    data: deletedUser[0],
  });
});

// Step 6: Error handling middleware
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found!" });
});

// Step 7: Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
