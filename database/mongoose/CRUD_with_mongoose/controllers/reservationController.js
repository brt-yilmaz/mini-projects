const Reservation = require("../models/reservationModel");

exports.createReservation = async (req, res) => {
  try {
    const { eventName, eventDate, userName, location, numberOfPeople } =
      req.body;

    const reservation = await Reservation.create({
      eventName,
      eventDate,
      userName,
      location,
      numberOfPeople,
    });

    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json({
      status: "success",
      results: reservations.length,
      data: {
        reservations,
      },
    });
  } catch (error) {
    res.status(404).json({ status: "fail", error: "Server error" });
  }
};

exports.getReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        reservation,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
