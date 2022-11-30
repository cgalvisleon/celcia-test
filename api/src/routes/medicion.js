const express = require("express");
const Service = require("../services/medicion");
const authr = require("../middleware/authr");

function Api(app) {
  const router = express.Router();
  app.use("/mediciones", router);
  app.use("/mediciones", authr);

  const service = new Service();

  router.get("/", async function (req, res) {
    const { dateint } = req.query;
    const { dateend } = req.query;

    try {
      res.status(200).json({
        dateint,
        dateend,
      });
    } catch (err) {
      res.status(500).json({
        err,
      });
    }
  });

  router.post("/", async function (req, res) {
    const { filepath } = req.body;
    try {
      res.status(200).json({
        filepath,
      });
    } catch (err) {
      res.status(500).json({
        err,
      });
    }
  });
}

module.exports = Api;
