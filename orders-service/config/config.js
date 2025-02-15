require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "test",
  port: process.env.PORT || 3002,
  secretKey: process.env.SECRET_KEY,
  jwtExpirationTime: process.env.JWT_EXPIRATION_TIME || "1h",
  dbMongoUri:
    process.env.NODE_ENV === "test"
      ? process.env.MONGO_DB_URI_TEST
      : process.env.MONGO_DB_URI,
};

module.exports = { config };
