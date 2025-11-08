// eventDemo.js

// Import the 'events' module
const EventEmitter = require("events");

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Create an event listener (subscriber)
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js Events Demo 🎉`);
});

// Another listener for the same event
eventEmitter.on("greet", (name) => {
  console.log(`How are you today, ${name}? 😊`);
});

// Emit (trigger) the event
eventEmitter.emit("greet", "Shamal");
