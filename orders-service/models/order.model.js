const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customer",
      required: [true, "El cliente es requerido"],
    },
    items: [
      {
        product: {
          type: String,
          required: [true, "El producto es requerido"],
        },
        quantity: {
          type: Number,
          required: [true, "La cantidad es requerida"],
          min: 1,
        },
        price: {
          type: Number,
          required: [true, "El precio es requerido"],
          min: 0,
        },
      },
    ],
    status: {
      type: String,
      required: [true, "El estado es requerido"],
      enum: ["pendiente", "procesando", "completado", "cancelado"],
      default: "pendiente",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
