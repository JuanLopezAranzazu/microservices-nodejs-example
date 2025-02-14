const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es requerido"],
      minlength: 3,
      maxlength: 128,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "El correo es requerido"],
      validate: {
        validator: function (value) {
          return validator.isEmail(value);
        },
        message: function () {
          return "El correo no es válido";
        },
      },
    },
    gender: {
      type: String,
      required: [true, "El género es requerido"],
      enum: ["masculino", "femenino"],
    },
    age: {
      type: Number,
      required: [true, "La edad es requerida"],
      min: 18,
      max: 100,
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
