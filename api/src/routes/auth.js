const express = require("express");

function Api(app) {
  const router = express.Router();
  app.use("/", router);

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

  router.post("/signUp", async function (req, res) {
    const { username } = req.body;
    const { password } = req.body;
    const { confirmacion } = req.body;

    try {
      res.status(200).json({
        username,
        password,
        confirmacion,
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
      res.status(200).json({
        username,
        password,
      });
    } catch (err) {
      res.status(500).json({
        err,
      });
    }
  });
}

module.exports = Api;
