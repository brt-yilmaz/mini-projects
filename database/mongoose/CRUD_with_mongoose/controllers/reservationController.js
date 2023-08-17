const Reservation = require("../models/reservationModel");

const APIFeatures = require("../utils/apiFeatures");

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

exports.aliasClosestReservations = async (req, res, next) => {
  req.query.limit = "3";
  req.query.sort = "-eventDate";
  req.query.fields = "eventName";
  next();
};

exports.getAllReservations = async (req, res) => {
  const features = new APIFeatures(Reservation.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const reservations = await features.query;

  res.status(200).json({
    status: "success",
    results: reservations.length,
    data: {
      reservations,
    },
  });

  //   try {
  //     // Filtering
  //     const queryObj = { ...req.query };
  //     let queryStr = JSON.stringify(queryObj);
  //     queryStr = queryStr.replace(/\b(gte|lte|lt|gt)\b/g, (match) => `$${match}`);

  //     let query = Reservation.find(JSON.parse(queryStr));

  //     // Sorting
  //     if (req.query.sort) {
  //       query = query.sort(req.query.sort);
  //     }

  //     // Fields to be returned
  //     if (req.query.fields) {
  //       query = query.select(req.query.fields);
  //     }

  //     // Pagination
  //     const page = req.query.page * 1 || 1; // string to number and default to 1
  //     const limit = req.query.limit * 1 || 50;
  //     const skip = (page - 1) * limit;
  //     query = query.skip(skip).limit(limit);

  //     if (req.query.page) {
  //       // Check if page exists
  //       const numReservations = await Reservation.countDocuments();
  //       if (skip >= numReservations) throw new Error("This page does not exist");
  //     }

  //     // Execute Query
  //     const reservations = await query;

  //     // Send Response
  //     res.status(200).json({
  //       status: "success",
  //       results: reservations.length,
  //       data: {
  //         reservations,
  //       },
  //     });
  //   } catch (error) {
  //     res.status(404).json({ status: "fail", error: "Server error" });
  //   }
};

exports.getReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    // Tour.findOne({_id : req.params.id})
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

exports.updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
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

exports.deleteReservation = async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
