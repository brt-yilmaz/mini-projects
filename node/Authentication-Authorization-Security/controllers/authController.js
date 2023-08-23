const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      photo: req.body.photo,
    });

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.status(201).json({
      status: "success",
      token,
      data: {
        newUser,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
      return next((err) => {
        return res.status(400).json({
          status: "fail",
          message: "Missing email or password",
        });
      });
    }

    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select("+password");
    const correct = await user.correctPassword(password, user.password);

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next((err) => {
        return res.status(401).json({
          status: "fail",
          message: "Invalid email or password",
        });
      });
    }

    // 3) If everything ok, send token to client
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.status(200).json({
      status: "success",
      token,
    });
  } catch (err) {
    next(err);
  }
};
