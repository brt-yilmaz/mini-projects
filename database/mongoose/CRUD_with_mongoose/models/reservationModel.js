const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  userName: { type: String, required: true },
  location: { type: String, enum: ["indoor", "outdoor"], default: "indoor" },
  numberOfPeople: { type: Number, default: 4, min: 2, max: 10 },
  createdAt: { type: Date, default: Date.now },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
