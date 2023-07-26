const { readFile } = require("node:fs/promises");

//Funcin auto invocada

(async () => {
  console.log("Leyendo el primer archivo...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("primer texto", text);

  console.log("COSAS MIENTRAS SE LEE EL ARCHVIO");

  console.log("Leyendo el SEGUNDO archivo...");
  const secondText = await readFile("./archivo2.txt", "utf-8");
  console.log("segundo texto", secondText);
})();

// async function init() {
//   console.log("Leyendo el primer archivo...");
//   const text = await readFile("./archivo.txt", "utf-8");
//   console.log("primer texto", text);

//   console.log("COSAS MIENTRAS SE LEE EL ARCHVIO");

//   console.log("Leyendo el SEGUNDO archivo...");
//   const secondText = await readFile("./archivo2.txt", "utf-8");
//   console.log("segundo texto", secondText);
// }

//init();
