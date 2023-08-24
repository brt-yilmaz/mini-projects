const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.route("/").get(authController.protect, userController.getAllUsers);

router
  .route("/:id")
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    userController.deleteUser
  );

module.exports = router;
