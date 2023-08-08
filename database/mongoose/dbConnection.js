const mongoose = require("mongoose");
require("dotenv").config();

const dbName = "mongooseExample"; // default is test
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@myatlasclusteredu.nfux5tm.mongodb.net/${dbName}?retryWrites=true&w=majority`;

main()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => console.log(err));

const tourSchema = new mongoose.Schema({
  // If you want to add additional keys later, use the Schema.add() method.
  // By default, Mongoose adds an _id property to your schemas.

  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.0,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
});

const Tour = mongoose.model("Tour", tourSchema);

const firstTour = new Tour({
  name: "Safari",
  rating: 4.5,
  price: 940,
});

firstTour
  .save()
  .then((doc) => console.log(doc))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri);
}
