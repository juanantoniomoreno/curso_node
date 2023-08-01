const exp = require("constants");
const express = require("express");
const app = express();

const dittoJSON = require("./pokemon/ditto");

//Para quitar de la respuesta la tecnología que se ha usado
app.disable("x-powered-by");

const PORT = process.env.PORT ?? 1234;

//Herramienta de express que hace lo mismo que el middleware de abajo
app.use(express.json());

// Middleware

// app.use((req, res, next) => {
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();

//   // Sólo llegan requests que son POST y el Content/Type: application/json

//   let body = "";

//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();

//     // Mutar la request y meter la info en el req.body
//     req.body = data;
//     next();
//   });
// });

app.get("/pokemon/ditto", (req, res) => {
  res.status(200).json(dittoJSON);
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

//Forma global de tratar las requests
app.use((req, res) => {
  res.status(404).send("<h1>Error 404</h1>");
});

app.listen(PORT, () => {
  console.log("SERVER LISTENING ON PORT " + PORT);
});
