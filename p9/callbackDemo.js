// callbackDemo.js

// Function that takes a callback
function greetUser(name, callback) {
  console.log("Processing your request...");
  
  // Simulate delay (like reading file or fetching data)
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
    callback(); // calling the callback after greeting
  }, 2000);
}

// Callback function
function sayGoodbye() {
  console.log("Goodbye! Have a nice day 😊");
}

// Calling greetUser with a callback
greetUser("Shamal", sayGoodbye);
