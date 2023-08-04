const express = require("express");
const userRouter = express.Router();

userRouter.param("id", checkID);

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).patch(updateUser);

function checkID(req, res, next, val) {
  const id = users.find((user) => user.id === parseInt(val));
  if (!id) {
    return res.status(404).send({
      status: "fail",
      message: "InvalidID",
    });
  }
  next();
}

function getAllUsers(req, res) {
  // Logic to get all users
}

function createUser(req, res) {
  // Logic to create a new user
}

function getUser(req, res) {
  // Logic to get a specific user by ID
}

function updateUser(req, res) {
  // Logic to update a user by ID
}

module.exports = userRouter;
