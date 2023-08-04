const express = require("express");
const userRouter = express.Router();

userRouter.param("id", checkID);
userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).patch(updateUser);

const users = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Michael Johnson", age: 28 },
];

function checkID(req, res, next, val) {
  const user = users.find((user) => user.id === parseInt(val));
  if (!user) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
}

function getAllUsers(req, res) {
  // Logic to get all users
  res.status(200).json(users);
}

function createUser(req, res) {
  // Logic to create a new user
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
}

function getUser(req, res) {
  // Logic to get a specific user by ID
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.status(200).json(user);
}

function updateUser(req, res) {
  // Logic to update a user by ID
  const user = users.find((user) => user.id === parseInt(req.params.id));
  Object.assign(user, req.body);
  res.status(200).json(user);
}

module.exports = userRouter;
