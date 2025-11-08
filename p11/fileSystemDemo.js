// fileSystemDemo.js

// Import the File System module
const fs = require("fs");

// 1️⃣ Create / Write to a file
fs.writeFile("example.txt", "Hello! This is a Node.js File System demo.", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("✅ File created and data written successfully.");

    // 2️⃣ Read the file
    fs.readFile("example.txt", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
      } else {
        console.log("\n📖 File Content:");
        console.log(data);

        // 3️⃣ Append new data to the file
        fs.appendFile("example.txt", "\nAppended line: Learning Node.js is fun!", (err) => {
          if (err) {
            console.error("Error appending to file:", err);
          } else {
            console.log("\n✍️ Data appended successfully.");

            // 4️⃣ Rename the file
            fs.rename("example.txt", "newExample.txt", (err) => {
              if (err) {
                console.error("Error renaming file:", err);
              } else {
                console.log("\n📁 File renamed to 'newExample.txt'.");

                // 5️⃣ Delete the file
                fs.unlink("newExample.txt", (err) => {
                  if (err) {
                    console.error("Error deleting file:", err);
                  } else {
                    console.log("\n🗑️ File deleted successfully.");
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
