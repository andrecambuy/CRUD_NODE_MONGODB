/**imports**/
const express = require("express");
const cors = require("cors");
const db = require("./config/dbConfig");
const routes = require("./routes");

/**dbConnection**/
db.on("error", console.log.bind(console, "Erro de conexão com Banco de Dados"));
db.once("open", () => {
  console.log("Conexão com banco de dados estabelecida");
});

/**json cors express and routes */
const app = express();
app.use(cors());
app.use(express.json());
routes(app);

module.exports = app;
