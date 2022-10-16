const carros = require("../model/Car.js");

class CarController {
  //   Get all cars
  static listarCarros = (req, res) => {
    carros.find((err, carros) => {
      res.status(200).json(carros);
    });
  };
  //GET by ID
  static listarCarrosPorId = (req, res) => {
    const id = req.params.id;

    try {
      carros.findById(id).exec((err, carros) => {
        res.status(200).send({ carros });
      });
    } catch (err) {
      res.status(400).send({ message: `${err.message} - id  não existe` });
    }
  };

  //POST new Car
  static cadastrarCarro = (req, res) => {
    let carro = new carros(req.body);

    carro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - FALHA AO CADASTRAR carro!` });
      } else {
        res.status(201).send(carro.toJSON());
      }
    });
  };

  //UPDATE
  static autualizarCarro = (req, res) => {
    const id = req.params.id;

    carros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "carro atualizado" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  //DELET CAR
  static excluirCarro = (req, res) => {
    let id = req.params.id;

    carros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "carro excluido" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Não foi possivel deletar` });
      }
    });
  };
}

module.exports = CarController;
