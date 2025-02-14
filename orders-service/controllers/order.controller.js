const Order = require("../models/order.model");
const { isObjectId } = require("../utils/request");

// obtener todas las órdenes
const getOrders = async (req, res) => {
  console.log("getOrders");
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// obtener una orden por su id
const getOrderById = async (req, res) => {
  console.log("getOrderById");
  try {
    const orderId = req.params.id;
    // verificar si el id es válido
    if (!isObjectId(orderId)) {
      return res.status(400).json({ message: "Id de orden inválido" });
    }
    const order = await Order.findById(orderId);
    // verificar si la orden existe
    if (!order) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// crear una orden
const createOrder = async (req, res) => {
  console.log("createOrder");
  try {
    const body = req.body;
    const order = new Order(body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// actualizar una orden
const updateOrder = async (req, res) => {
  console.log("updateOrder");
  try {
    const orderId = req.params.id;
    const body = req.body;
    // verificar si el id es válido
    if (!isObjectId(orderId)) {
      return res.status(400).json({ message: "Id de orden inválido" });
    }
    const order = await Order.findById(orderId);
    // verificar si la orden existe
    if (!order) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }
    await Order.findByIdAndUpdate(orderId, body);
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// eliminar una orden
const deleteOrder = async (req, res) => {
  console.log("deleteOrder");
  try {
    const orderId = req.params.id;
    // verificar si el id es válido
    if (!isObjectId(orderId)) {
      return res.status(400).json({ message: "Id de orden inválido" });
    }
    const order = await Order.findById(orderId);
    // verificar si la orden existe
    if (!order) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }
    await Order.findByIdAndDelete(orderId);
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
