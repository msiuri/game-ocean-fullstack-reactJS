const express = require("express");
const app = express();

//sinalizar q estamos usando express no body

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

const list = [
  {
    id: 1,
    name: "Alain",
    points: 25,
  },
  {
    id: 2,
    name: "Beatriz",
    points: 50,
  },
  {
    id: 3,
    name: "Daniel",
    points: 45,
  },
];

//Endpoint READ ALL [GET]
app.get("/score", function (req, res) {
  res.send(list);
});

//Endpoint CREATE - [POST]
app.post("/score", function (req, res) {
  //pega o item do formulário
  const item = req.body;

  //add item na lista
  list.push({
    id: list.length + 1,
    name: item.name,
    points: item.points,
  });

  res.status(200).send("OK");
});

app.listen(3000);
