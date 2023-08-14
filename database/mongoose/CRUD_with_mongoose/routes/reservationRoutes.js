const express = require("express");
const reservationController = require("../controllers/reservationController");

const router = express.Router();

router.post("/create", reservationController.createReservation);
router.get("/getReservations", reservationController.getAllReservations);
router.get("/getReservations/:id", reservationController.getReservation);

module.exports = router;
