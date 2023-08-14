const express = require("express");
const reservationController = require("../controllers/reservationController");

const router = express.Router();

router.post("/create", reservationController.createReservation);
router.get("/getReservations", reservationController.getAllReservations);

router
  .route("/getReservations/:id")
  .get(reservationController.getReservation)
  .patch(reservationController.updateReservation)
  .delete(reservationController.deleteReservation);

module.exports = router;
