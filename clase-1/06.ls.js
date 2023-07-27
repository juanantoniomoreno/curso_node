const fs = require("node:fs/promises");

fs.readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    if (err) {
      console.error("Error lectura", err);
    }
  });

// fs.readdir(".", (err, files) => {
//   if (err) {
//     console.error("Error lectura directorio", err);
//     return;
//   }

//   files.forEach((file) => {
//     console.log(file);
//   });
// });
