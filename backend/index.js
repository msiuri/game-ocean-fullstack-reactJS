const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/oi", function (req, res) {
  res.send("Olá mundo");
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

app.listen(3000);
