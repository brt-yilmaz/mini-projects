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
