const path = require("node:path");

//barra separadora rutas en SO
console.log(path.sep);

//Unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

//Nombre del fichero
const base = path.basename("/tmp/juan-secret-files/password.txt");
console.log(base);

//Sin la extensión
const filename = path.basename("/tmp/juan-secret-files/password.txt", ".txt");
console.log(filename);

//Obtener la extension
const extension = path.extname("image.jpg");
console.log(extension);
