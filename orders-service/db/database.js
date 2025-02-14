const mongoose = require("mongoose");
const { config } = require("../config/config");

// conexión a la base de datos
mongoose
  .connect(config.dbMongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((err) => {
    console.error(err);
  });

  // captura de errores no controlados
process.on("uncaughtException", (error) => {
  console.error(error);
  mongoose.disconnect();
});
