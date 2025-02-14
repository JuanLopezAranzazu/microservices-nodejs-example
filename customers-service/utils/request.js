const mongoose = require("mongoose");

// Función para validar si un valor es un ObjectId de MongoDB
const isObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

module.exports = {
  isObjectId,
};
