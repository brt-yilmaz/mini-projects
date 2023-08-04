const express = require("express");
const app = express();
const port = 3000;

const userRouter = require("./userRouter"); // Import the userRouter.js file
const exerciseRouter = require("./exerciseRouter"); // Import the exerciseRouter.js file

app.use(express.json());

app.use("/users", userRouter);
app.use(express.static(`${__dirname}/public`)); // To serve static site

app.use("/exercises", exerciseRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
