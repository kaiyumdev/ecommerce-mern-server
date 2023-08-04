const { body } = require("express-validator");

const validateRegistration = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required. Enter your full name here")
    .isLength({ min: 3, max: 31 })
    .withMessage("Name should be at least 3 to 31 characters"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required. Enter your email address here")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required. Enter your password here")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters")
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{6,}$/)
    .withMessage(
      "Password should contain at least one uppercase letter, one lowercase letter, one number and one special character "
    ),
  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is required. Enter address here."),
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone is required. Enter phone number here."),
  body("image").custom((value, { req }) => {
    if (!req.file || !req.file.buffer) {
      throw new Error("User image is required");
    }
    return true;
  }),
];

module.exports = validateRegistration;
