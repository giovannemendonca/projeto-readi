const express = require("express");
const routes = require("./routes")

const app = express();
const port = 5050;

routes(app)

app.listen(port, () => console.log(`Servidor rondando na porta ${port}!`));
