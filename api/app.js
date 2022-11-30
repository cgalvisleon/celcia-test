const express = require("express");
const app = express();
const server = require("https").Server(app);
const cors = require("./src/middleware/cors");
const config = require("./src/components/config");

app.use(express.json({ limit: "50mb" }));
app.use(cors);

server.listen(config.port, function () {
  console.log(`Server run in http://localhost:${config.port}`);
});
