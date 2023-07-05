// Define some functions for the example
const addTwo = (x) => x + 2;
const square = (x) => x ** 2;
const subtractThree = (x) => x - 3;
const double = (x) => x * 2;

// Define the compose function
const compose =
  (...functions) =>
  (x) =>
    functions.reduce((acc, fn) => fn(acc), x);

// Compose the functions into a single function
const composedFunction = compose(addTwo, square, subtractThree, double);

// Test the result
const result = composedFunction(5);
console.log(result); // Output: 92
