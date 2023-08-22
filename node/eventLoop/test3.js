const fs = require("fs");

console.log("Starting the script.");

setImmediate(() => {
  console.log("Top-level callback inside setImmediate executed.");

  setImmediate(() => {
    console.log("Nested callback inside setImmediate executed.");
  });

  process.nextTick(() => {
    console.log("Nested callback inside setImmediate - nextTick executed.");
  });

  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      console.log(
        "File contents from nested fs.readFile in set Immediate:",
        data
      );
    }
  });
});

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File contents from top level fs.readFile:", data);
  }
});

process.nextTick(() => {
  console.log("Top-level callback inside process.nextTick executed.");
});

console.log("Script finished.");

/*
Starting the script.
Script finished.
Top-level callback inside process.nextTick executed.
Top-level callback inside setImmediate executed.
Nested callback inside setImmediate - nextTick executed.
Nested callback inside setImmediate executed.
File contents from top level fs.readFile: This is a test file to simulate nodejs event Loop.
File contents from nested fs.readFile in set Immediate: This is a test file to simulate nodejs event Loop.
*/
