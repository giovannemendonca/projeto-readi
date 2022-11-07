const db = require("../models");

class CarsController {
    
  //GET
  static async getAll(req, res) {
    try {
      const carsAll = await db.Cars.findAll();
      return res.status(200).json(carsAll);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //Filtro 01
  static async getCarID(req, res) {
    try {
      const { id } = req.params;
      const car = await db.Cars.findOne({
        where: {
          id: id,
        },
      });
      if (car === null) {
        res.status(500).json({ messege: `ID ${id} não encontrado` });
      }
      return res.status(200).json(car);
    } catch (error) {
      return res.status(200).json(error.messege);
    }
  }

  //Filtro 02
  static async getCarCambio(req, res) {
    const { cambio } = req.params;
    try {
      const carCambio = await db.Cars.findAll({
        where: {
          cambio: String(cambio),
        },
      });
      res.status(200).json(carCambio);
    } catch (error) {
      return res.status(500).json(error.messege);
    }
  }

  //POST

  static async postCar(req, res) {
    try {
      const body = req.body;

      const haveCar = await db.Cars.findAll({
        where: {
          marca: body.marca,
          modelo: body.modelo,
          cor: body.cor,
          anoFabricacao: body.anoFabricacao,
          anoModelo: body.anoModelo,
          cambio: body.cambio,
        },
      });

      if (haveCar == "") {
        const newCar = await db.Cars.create(body);
        return res.status(200).json(newCar);
      }
      res.status(500).json({ messege: `Carro já cadastrado` });
    } catch (error) {
      return res.status(500).json(error.messege);
    }
  }

  //UPDATE

  static async updateCar(req, res) {
    try {
      const { id } = req.params;
      const body = req.body;

      await db.Cars.update(body, {
        where: {
          id: Number(id),
        },
      });
      return res.status(200).send(`Id ${id} atualizado`);
    } catch (error) {
      return res.status(500).json(error.messege);
    }
  }

  //DELETE
  static async deleteCar(req, res) {
    const { id } = req.params;
    try {
      await db.Cars.destroy({
        where: {
          id: id,
        },
      });
      return res.status(200).send(`ID ${id} Deletado com sucesso`);
    } catch (error) {
      return res.status(500).json(error.messege);
    }
  }
}

module.exports = CarsController;
