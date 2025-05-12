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

// url per i post nella bacheca

app.get("/bacheca", (req, res) => {
  const posts = [
    {
      name: "Ciambellone",
      description: "un ciambellone",
      img: "/img/ciambellone.jpeg",
      tags: "ciambella",
    },
    {
      name: "Cracker alla Barbabietola",
      description: "Dei crackers alla barbabietola",
      img: "/img/cracker_barbabietola.jpeg",
      tags: "cracker, barbabietola",
    },
    {
      name: "Pane Fritto Dolce",
      description: "Del pane fritto dolce",
      img: "/img/pane_fritto_dolce.jpeg",
      tags: "pane, fritto, dolce",
    },
    {
      name: "Pasta alle Barbabietole",
      description: "Della pasta alla barbabietola",
      img: "/img/pasta_barbabietola.jpeg",
      tags: "pasta, barbabietola",
    },
    {
      name: "Torta Paesana",
      description: "Della Torta paesana",
      img: "/img/torta_paesana.jpeg",
      tags: "torta, paesana",
    },
  ];
  res.json(posts);
});

// ascolto

app.listen(port, () => {
  console.log("Server in ascolto alla porta " + port);
});
