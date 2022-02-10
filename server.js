require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Faz a conexão com o banco de dados
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB: Successfully connected!");
    // Emite o sinal positivo para poder iniciar a porta.
    app.emit("DB_CONNECT");
  });

// Configuração para pegar informações do body.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.use(routes);

// Verifica se o banco de dados se conectou para poder iniciar a porta.
app.on("DB_CONNECT", () => {
  // Porta
  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
});