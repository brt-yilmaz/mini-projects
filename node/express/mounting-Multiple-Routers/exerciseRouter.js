const express = require("express");
const exerciseRouter = express.Router();

exerciseRouter.route("/").get(getAllExercises).post(createExercise);

function getAllExercises(req, res) {
  // Logic to get all exercises
}

function createExercise(req, res) {
  // Logic to create a new exercise
}

module.exports = exerciseRouter;
