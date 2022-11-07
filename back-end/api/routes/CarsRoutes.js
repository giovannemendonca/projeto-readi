const { Router } = require("express");
const CarsController = require("../controllers/CarsController");

const router = Router();

router.get("/cars", CarsController.getAll);

// Filtro 01
router.get("/cars/:id", CarsController.getCarID);
// Filtro 02
router.get("/cars/cambio/:cambio", CarsController.getCarCambio);

router.post("/cars", CarsController.postCar);

router.put("/cars/:id", CarsController.updateCar);

router.delete("/cars/:id", CarsController.deleteCar);

module.exports = router;
