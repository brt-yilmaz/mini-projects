const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const reservationRoutes = require("./routes/reservationRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const dbName = "mongooseExample"; // default is test
const MONGODB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@myatlasclusteredu.nfux5tm.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use("/reservations", reservationRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server error" });
});

// Establish MongoDB connection
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
    // Start listening for incoming requests
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
