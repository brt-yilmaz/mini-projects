const fs = require("fs");

console.log("Script started.");

setImmediate(() => {
  console.log("setImmediate callback executed.");

  setImmediate(() => {
    console.log("Inner setImmediate callback executed.");
  });

  process.nextTick(() => {
    console.log("Inner setImmediate - nextTick executed.");
  });

  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      console.log("File contents:", data);
    }
  });
});

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File contents:", data);
  }
});

process.nextTick(() => {
  console.log("process.nextTick callback executed.");
});

console.log("Script ended.");

/*
Script started.
Script ended.
process.nextTick callback executed.
setImmediate callback executed.
Inner setImmediate - nextTick executed.
Inner setImmediate callback executed.
File contents: This is a test file to simulate nodejs event Loop.
File contents: This is a test file to simulate nodejs event Loop.
*/
