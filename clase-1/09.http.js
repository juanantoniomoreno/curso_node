const http = require("node:http");
const { findAvailabePort } = require("./10.free-port");

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hello Mundo");
});

findAvailabePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
