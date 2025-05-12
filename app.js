//base x impostare express

const express = require("express");
const app = express();
const port = 3000;

//implementazione servizio public

app.use(express.static("public"));

//root per salutare

app.get("/", (req, res) => {
  res.json({ message: "Ciao, questo è il mio blog!" });
});
