const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true }, // you can use lowercase: true
    eventDate: { type: Date, required: true },
    userName: { type: String, required: true },
    location: { type: String, enum: ["indoor", "outdoor"], default: "indoor" },
    numberOfPeople: { type: Number, default: 4, min: 2, max: 10 },
    createdAt: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
    // immutable: true if you want to change, you won't be get an error , it will be ignored
    // you can use {  type: mongoose.SchemaTypes.ObjectId , ref: 'Location'}  to refer another _id
    // you can use another schema in here location: locationSchema, best practice with complex object.
    // you can write your own validator like validate: {validator : v => v % 2 === 0, message: props => `${props.value} is not an even number`}. It only runs with create and save. You can use Reservation.findById().save()
  },
  {
    strictQuery: true, // Mongoose will only return documents that match the fields that are defined in the schema.
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reservationSchema.methods.info = function () {
  console.log(`${this.eventName} ${this.eventDate}`);
};

reservationSchema.statics.findByEventName = function (name) {
  return this.find({ eventName: new RegExp(name, "i") });
};

reservationSchema.query.byEventName = function (name) {
  // you can use only with query to chain the methods
  return this.where({ eventName: new RegExp(name, "i") });
};

reservationSchema.virtual("namedEvent").get(function () {
  // not save in database , works only in app so that we can not use it in query
  return `${this.userName} <${this.eventName}>`;
});

reservationSchema.pre("save", function (next) {
  // DOCUMENT MIDDLEWARE: runs before .save() and .create()
  this.createdAt = Date.now();
  next();
});

// Query Middleware

reservationSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } }); // this is the query
  next();
});

// Aggregation Middleware

reservationSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { active: { $ne: false } } }); // this = aggregation array
  next();
});

reservationSchema.post("save", function (doc, next) {
  // doc is finished document ^
  doc.info();
  next();
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
