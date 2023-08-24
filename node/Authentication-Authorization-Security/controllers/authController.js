const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      passwordChangedAt: req.body.passwordChangedAt,
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
    return res.status(401).json({
      status: "fail",
      message: "Invalid email or password",
    });
  }
};

exports.protect = async (req, res, next) => {
  console.log("inside protect");
  try {
    // 1) Getting token and check if it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next((err) => {
        return res.status(401).json({
          status: "fail",
          message: "Missing token",
        });
      });
    }

    // 2) Verification token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next((err) => {
        return res.status(401).json({
          status: "fail",
          message: "The token is no longer valid",
        });
      });
    }

    // 4) Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next((err) => {
        return res.status(401).json({
          status: "fail",
          message: "User recently changed password",
        });
      });
    }

    req.user = currentUser;
    next();
  } catch (err) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid token",
    });
  }
};
