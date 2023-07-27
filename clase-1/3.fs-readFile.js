const fs = require("node:fs");
const { promisify } = require("node:util");

//En los módulos nativos que no tienen promesas

const readFilePromise = promisify(fs.readFile);

//Síncrono Y Asíncrono

console.log("Leyendo el primer archivo...");
readFilePromise("./archivo.txt", "utf-8").then((text) => {
  console.log("primer texto", text);
});

// fs.readFile("./archivo.txt", "utf-8", (err, text) => {
//   console.log("primer texto", text);
// });

console.log("HACER COSAS MIENTRAS LEE EL ARCHIVO");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, secondTxt) => {
  console.log("segundo texto", secondTxt);
});
