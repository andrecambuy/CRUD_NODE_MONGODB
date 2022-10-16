const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  carro: {
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    ano: { type: Number, required: true },
  },
  preco: { type: Number, required: true },
});

const carro = mongoose.model("carro", CarSchema);

module.exports = carro;
