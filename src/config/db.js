const mongoose = require("mongoose");
const { mongodbURL } = require("../secret");

const connectDatabase = async (options = {}) => {
  try {
    await mongoose.connect(mongodbURL, options);
    console.log("Connected to MongoDB at mongoose successfully");
    mongoose.connection.on("error", () => {
      console.error("DB connection error", error);
    });
  } catch (error) {
    console.error("Could not connect to DB", error.toString());
  }
};

module.exports = connectDatabase;
