const express = require("express");
const carRouter = require("./carRouter.js");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Router is now ok" });
  });

  app.use(express.json(), carRouter);
};

module.exports = routes;
