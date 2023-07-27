const http = require("node:http");

const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("content-type", "application/json");
          res.end(JSON.stringify(dittoJSON));
          break;

        default:
          res.statusCode = 404;
          res.setHeader("content-type", "application/json");
          res.end();
      }
      break;

    case "POST":
      switch (url) {
        case "/pokemon": {
          const body = "";
          //escuchar data
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body);
            res.writeHead(201, {"content-type", "application/json"});

            data.timestamp = Date.now();
            res.send();
          })

          break;
        }

        case "/otro": {
          const body = "";
          break;
        }
      }
      break;

    default:
      break;
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port ${desiredPort}`);
});
