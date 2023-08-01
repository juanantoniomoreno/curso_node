const http = require("node:http");
const fs = require("node:fs");
const picocolors = require("picocolors");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200; //Ok
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Página Inicio</h1>");
  } else if (req.url === "/imagen") {
    res.setHeader("Content-Type", "image/png; charset=utf-8");

    fs.readFile("./error_emuasa.png", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("<h1>500 - Internal Error</h1>");
      } else {
        res.setHeader("Content-Type", "image/png");
        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Contacto</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 - Not Found </h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port ${desiredPort}`);
});
