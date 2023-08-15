console.log("Script started.");

setTimeout(() => {
  console.log("Callback inside setTimeout executed.");
}, 0);

process.nextTick(() => {
  console.log("Callback inside process.nextTick executed.");
});

Promise.resolve().then(() => {
  console.log("Callback inside Promise executed.");
});

console.log("Script ended.");

/*
Script started.
Script ended.
Callback inside process.nextTick executed.
Callback inside Promise executed.
Callback inside setTimeout executed.
*/
