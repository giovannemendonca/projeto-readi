const bodyParser = require("body-parser")
const cars = require("./CarsRoutes")

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cars);
}