const express = require("express");
const { config } = require("./config/config");
const { logErrors, errorHandler } = require("./middlewares/errorHandler");
const router = require("./router/router");

const port = config.port;
const app = express();

// db
require("./db/database");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// middlewares error
app.use(logErrors);
app.use(errorHandler);

// routes
app.use("/api/v1", router);

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
