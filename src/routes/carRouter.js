const express = require("express");
const CarController = require("../controllers/carController.js");

const router = express.Router();

router
  .get("/carros", CarController.listarCarros)
  .get("/carros/:id", CarController.listarCarrosPorId)
  .post("/carros", CarController.cadastrarCarro)
  .put("/carros/:id", CarController.autualizarCarro)
  .delete("/carros/:id", CarController.excluirCarro);

module.exports = router;
