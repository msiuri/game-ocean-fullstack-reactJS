const express = require("express");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "fullstack-ocean";

//sinalizar q estamos usando express no body

async function main() {
  console.log("Conectando");

  //banco de dados local
  /*
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("pontuacoes");
  const app = express();
  */

  console.log("Conectado...");
  app.use(express.json());

  //rota default para teste

  app.get("/", function (req, res) {
    res.send("Hello, World!");
  });

  // [GET] ALL
  app.get("/score", async function (req, res) {
    const item = await collection
      .find()
      .sort({ points: 1 })
      .limit(10)
      .toArray();

    res.send(item);
  });

  // [POST]
  app.post("/score", async function (req, res) {
    //pega o item do formulário
    const item = req.body;

    //add item na lista
    await collection.insertOne(item);

    res.status(200).send("OK");
  });

  // [PUT]
  app.put("/score/:id", async function (req, res) {
    const id = req.params.id;

    collection.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: item,
      }
    );
  });

  app.listen(process.env.PORT || 3000);
}
main();
