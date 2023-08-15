console.log("Starting the script.");

setTimeout(() => {
  console.log("Top-level callback inside setTimeout executed.");

  process.nextTick(() => {
    console.log("Nested callback inside setTimeout - nextTick executed.");
  });

  Promise.resolve().then(() => {
    console.log("Nested callback inside setTimeout - Promise executed.");
  });

  setTimeout(() => {
    console.log("Nested callback inside setTimeout - setTimeout executed.");
  }, 0);
}, 0);

process.nextTick(() => {
  console.log("Top-level callback inside process.nextTick executed.");

  process.nextTick(() => {
    console.log("Nested callback inside process.nextTick - nextTick executed.");

    process.nextTick(() => {
      console.log(
        "Deeply nested callback inside process.nextTick - nextTick executed."
      );
    });
  });

  Promise.resolve().then(() => {
    console.log("Nested callback inside process.nextTick - Promise executed.");
  });

  setTimeout(() => {
    console.log(
      "Nested callback inside process.nextTick - setTimeout executed."
    );
  }, 0);
});

Promise.resolve().then(() => {
  console.log("Top-level callback inside Promise executed.");

  process.nextTick(() => {
    console.log("Nested callback inside Promise - nextTick executed.");
  });

  Promise.resolve().then(() => {
    console.log("Nested callback inside Promise - Promise executed.");
  });

  setTimeout(() => {
    console.log("Nested callback inside Promise - setTimeout executed.");
  }, 0);
});

console.log("Script finished.");

/*
starting the script.
Script finished.
Top-level callback inside process.nextTick executed.
Nested callback inside process.nextTick - nextTick executed.
Deeply nested callback inside process.nextTick - nextTick executed.
Top-level callback inside Promise executed.
Nested callback inside process.nextTick - Promise executed.
Nested callback inside Promise - Promise executed.
Nested callback inside Promise - nextTick executed.
Top-level callback inside setTimeout executed.
Nested callback inside setTimeout - nextTick executed.
Nested callback inside setTimeout - Promise executed.
Nested callback inside process.nextTick - setTimeout executed.
Deeply nested callback inside Promise - setTimeout executed.
Nested callback inside setTimeout - setTimeout executed.
*/
