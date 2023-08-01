const http = require("node:http");

const fs = require("node:fs");

const dittoJSON = require("./pokemon/ditto");

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
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }
      break;

    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";
          //escuchar data
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", () => {
            const data = JSON.parse(body);
            //LLamar DB para guardar la info

            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            });

            data.timestamp = Date.now();
            res.end(JSON.stringify(data));
          });

          break;
        }
      }
      break;

    default:
      res.statusCode = 404;
      res.setHeader("Content/Type", "text/plain; charset=utf-8");
      return res.end("<h1>404</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port ${desiredPort}`);
});
