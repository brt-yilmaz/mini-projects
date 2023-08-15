console.log("Script started.");

setTimeout(() => {
  console.log("Callback inside setTimeout executed.");

  setTimeout(() => {
    console.log("Inner callback inside setTimeout executed.");
  }, 0);

  process.nextTick(() => {
    console.log("Inner callback inside setTimeout - nextTick executed.");
  });

  Promise.resolve().then(() => {
    console.log("Inner callback inside setTimeout - Promise executed.");
  });
}, 0);

process.nextTick(() => {
  console.log("Callback inside process.nextTick executed.");

  process.nextTick(() => {
    console.log("Inner callback inside process.nextTick executed.");
    process.nextTick(() => {
      console.log("2.Inner callback inside process.nextTick executed.");
    });
  });

  setTimeout(() => {
    console.log(
      "Inner callback inside process.nextTick - setTimeout executed."
    );
  }, 0);

  Promise.resolve().then(() => {
    console.log("Inner callback inside process.nextTick - Promise executed.");
  });
});

Promise.resolve().then(() => {
  console.log("Callback inside Promise executed.");

  Promise.resolve().then(() => {
    console.log("Inner callback inside Promise executed.");
  });

  process.nextTick(() => {
    console.log("Inner callback inside Promise - nextTick executed.");
  });

  setTimeout(() => {
    console.log("Inner callback inside Promise - setTimeout executed.");
  }, 0);
});

console.log("Script ended.");

/*
script started.
Script ended.
Callback inside process.nextTick executed.
Inner callback inside process.nextTick executed.
2.Inner callback inside process.nextTick executed.
Callback inside Promise executed.
Inner callback inside process.nextTick - Promise executed.
Inner callback inside Promise executed.
Inner callback inside Promise - nextTick executed.
Callback inside setTimeout executed.
Inner callback inside setTimeout - nextTick executed.
Inner callback inside setTimeout - Promise executed.
Inner callback inside process.nextTick - setTimeout executed.
Inner callback inside Promise - setTimeout executed.
Inner callback inside setTimeout executed.
*/
