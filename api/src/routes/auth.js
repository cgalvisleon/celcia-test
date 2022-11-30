const express = require("express");
const Service = require("../services/auth");

function Api(app) {
  const router = express.Router();
  app.use("/", router);

  const service = new Service();

  router.get("/", async function (req, res) {
    try {
      res.status(200).json({
        project: "Celcia test",
        autor: "cgalvisleon@gmail.com",
      });
    } catch (err) {
      res.status(500).json({
        err,
      });
    }
  });

  router.post("/signup", async function (req, res) {
    const { username } = req.body;
    const { password } = req.body;
    const { confirmacion } = req.body;

    try {
      result = await service.signUp({ username, password, confirmacion });
      res.status(200).json({
        result,
      });
    } catch (err) {
      res.status(500).json({
        err,
      });
    }
  });

  router.post("/signIn", async function (req, res) {
    const { username } = req.body;
    const { password } = req.body;

    try {
      result = await service.signIn({ username, password });
      res.status(200).json({
        result,
      });
    } catch (err) {
      res.status(500).json({
        err,
      });
    }
  });
}

module.exports = Api;
