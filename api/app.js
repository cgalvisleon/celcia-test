const express = require("express");
const app = express();
const cors = require("./src/middleware/cors");
const config = require("./src/components/config");
const auth = require("./src/routes/auth");
const medicion = require("./src/routes/medicion");

// Establece limite de respuesta
app.use(express.json({ limit: "50mb" }));

// Middleware de configuracion cors
app.use(cors);

// Carge de rutas de autenticacion
auth(app);

// Carge de rutas de medicion
medicion(app);

app.listen(config.port, function () {
  console.log(`Server run in http://localhost:${config.port}`);
});
