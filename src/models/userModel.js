const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcryptjs");
const { defaultImagePath } = require("../secret");

const userSchema = new Schema(
  {
    name: {
      type: "string",
      required: [true, "User name is required"],
      trim: true,
      minLength: [3, "User name must be at least 3 characters"],
      maxLength: [31, "User name must be at most 31 characters"],
    },
    email: {
      type: "string",
      required: [true, "User email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (v) => {
          return /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/.test(v);
        },
        message: "Please enter a valid email address",
      },
    },
    password: {
      type: "string",
      required: [true, "User name is required"],
      trim: true,
      minLength: [6, "Please enter at least six characters"],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    image: {
      type: Buffer,
      contentType: String,
      // required: [true, "User image is required"],
    },
    address: {
      type: "string",
      required: [true, "User address is required"],
      minLength: [3, "Address should be at least 3 characters"],
    },
    phone: {
      type: "string",
      required: [true, "User phone is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("Users", userSchema);
module.exports = User;
