// consoleApp.js

// Import readline module for input/output
const readline = require("readline");

// Create interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user for input
rl.question("Enter your name: ", (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js Console Application `);
  rl.close();
});
