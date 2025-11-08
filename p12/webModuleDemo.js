// webModuleDemo.js

// Import the built-in 'http' module
const http = require("http");

// Create a web server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/html" });

  // Handle different routes (URLs)
  if (req.url === "/") {
    res.write("<h1>Welcome to the Node.js Web Module Demo</h1>");
    res.write("<p>This is the Home Page.</p>");
  } else if (req.url === "/about") {
    res.write("<h1>About Us</h1>");
    res.write("<p>This page shows information about our Node.js app.</p>");
  } else if (req.url === "/contact") {
    res.write("<h1>Contact Us</h1>");
    res.write("<p>Email: demo@example.com</p>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
  }

  // End the response
  res.end();
});

// Server will listen on port 3000
server.listen(3000, () => {
  console.log("✅ Server is running at http://localhost:3000/");
});
