const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { config } = require("./config/config");

const port = config.port;
const app = express();

// microservicio de clientes
app.use(
  "/customers",
  createProxyMiddleware({
    target: config.customerUri,
    changeOrigin: true,
  })
);

// microservicio de ordenes
app.use(
  "/orders",
  createProxyMiddleware({
    target: config.orderUri,
    changeOrigin: true,
  })
);

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
