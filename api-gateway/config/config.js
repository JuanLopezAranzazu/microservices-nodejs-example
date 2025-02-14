require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "test",
  port: process.env.PORT || 3000,
  customerUri:
    process.env.CUSTOMER_SERVICE_URI || "http://localhost:3001/api/v1",
  orderUri: process.env.ORDER_SERVICE_URI || "http://localhost:3002/api/v1",
};

module.exports = { config };
