const fs = require("node:fs/promises");

//Síncrono Y Asíncrono

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("primer texto", text);
});

console.log("HACER COSAS MIENTRAS LEE EL ARCHIVO");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8").then((secondText) => {
  console.log("segundo texto", secondText);
});
