const exp = require("constants");
const express = require("express");
const app = express();

const PORT = process.env.PORT ?? 1234;

app.use(express.json());

// app.use((req, res, next) => {
//  if(req.method !== 'POST' ) return next();
//  if(req.headers['content-type'] !== 'application/json') return next();

//  req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   req.on('end' () => {
//     const data = JSON.parse(body);
//   })

//   next();
// });

app.get("/", (req, res) => {
  res.status(200).send("MI página");
});

app.post("/pokemon", (req, res) => {});

app.use((req, res) => {
  res.status(404).send("Error 404");
});

app.listen(PORT, () => {
  console.log("SERVER LISTENING ON PORT " + PORT);
});
