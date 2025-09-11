//1. Importar o framework
const express = require("express");

//2. criar uma instancia de aplicação
const app = express();

// middleware de aplicaçao
app.unsubscribe((req,res,next) => {
    console.log("Passei pelo middleware de app");
    next();

});

// rota raiz acessada via método GET
app.get("/", function (req, res) {});
// rota /login acessada via método POST
app.post("/login", function (req, res) {});
// rota /api acessada por qualquer método HTTP
app.all("/api", function (req, res) {});
