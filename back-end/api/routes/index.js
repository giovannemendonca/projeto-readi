const bodyParser = require("body-parser")
const cars = require("./CarsRoutes")
const cors = require('cors')

module.exports = app => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(cars);
}