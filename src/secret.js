require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 3002;
const mongodbURL =
  process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/ecommerceMern";

const defaultImagePath =
  process.env.DEFAULT_USER_IMAGE_PATH || "public/images/users/default.png";

module.exports = { serverPort, mongodbURL, defaultImagePath };
