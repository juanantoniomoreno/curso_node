const express = require("express");
const app = express();

app.disable("x-powered-by");

app.get("/", (req, res) => {
    res.json({ message: "Hola Mundo" });
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT " + PORT);
});
