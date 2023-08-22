const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: { type: String },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
