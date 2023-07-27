const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html; charset=utf-8");

    res.end("Página Inicio");
  } else if (req.url === "/imagen-super-bonita.png") {
    res.setHeader("content-type", "image/png; charset=utf-8");

    fs.readFile("./placa.png", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("<h1>Internal Error</h1>");
      } else {
        res.setHeader("content-type", "image/png");
        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end("<h1>contacto</h1>");
  } else {
    res.statusCode = 400;
    res.end("<h1>404 - Not Found </h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port ${desiredPort}`);
});
