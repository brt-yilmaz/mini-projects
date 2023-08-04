const express = require("express");
const exerciseRouter = express.Router();

exerciseRouter.route("/").get(getAllExercises).post(checkBody, createExercise);

function checkBody(req, res, next) {
  if (!req.body.name || !req.body.duration) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price",
    });
  }

  next();
}

function getAllExercises(req, res) {
  // Logic to get all exercises
}

function createExercise(req, res) {
  // Logic to create a new exercise
}

module.exports = exerciseRouter;
