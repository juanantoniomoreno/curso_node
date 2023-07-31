const net = require("node:net");

function findAvailabePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(desiredPort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });

    server.on("error", (err) => {
      if (err.code === "EADDINUSE") {
        findAvailabePort(0).then((port) => resolve(port));
      } else {
        reject(err);
      }
    });
  });
}

module.exports = { findAvailabePort };
