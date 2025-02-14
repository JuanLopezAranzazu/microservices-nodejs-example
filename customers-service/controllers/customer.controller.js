const Customer = require("../models/customer.model");
const { isObjectId } = require("../utils/request");

// obtener todos los clientes
const getCustomers = async (req, res) => {
  console.log("getCustomers");
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// obtener un cliente por su id
const getCustomerById = async (req, res) => {
  console.log("getCustomerById");
  try {
    const customerId = req.params.id;
    // verificar si el id es válido
    if (!isObjectId(customerId)) {
      return res.status(400).json({ message: "Id inválido" });
    }
    const customer = await Customer.findById(customerId);
    // verificar si el usuario existe
    if (!customer) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.status(200).json(customer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// crear un cliente
const createCustomer = async (req, res) => {
  console.log("createCustomer");
  try {
    const body = req.body;
    const { email } = body;
    // verificar si el correo ya existe
    const customerExists = await Customer.findOne({ email: email });
    if (customerExists) {
      return res.status(400).json({ message: "El correo ya existe" });
    }
    const customer = new Customer(body);
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// actualizar un cliente
const updateCustomer = async (req, res) => {
  console.log("updateCustomer");
  try {
    const customerId = req.params.id;
    const body = req.body;
    // verificar si el id es válido
    if (!isObjectId(customerId)) {
      return res.status(400).json({ message: "Id inválido" });
    }
    const customer = await Customer.findById(customerId);
    // verificar si el usuario existe
    if (!customer) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    await Customer.findByIdAndUpdate(customerId, body);
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// eliminar un cliente
const deleteCustomer = async (req, res) => {
  console.log("deleteCustomer");
  try {
    const customerId = req.params.id;
    // verificar si el id es válido
    if (!isObjectId(customerId)) {
      return res.status(400).json({ message: "Id inválido" });
    }
    const customer = await User.findById(customerId);
    // verificar si el usuario existe
    if (!customer) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    await Customer.findByIdAndDelete(customerId);
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
