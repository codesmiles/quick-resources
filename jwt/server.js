require("dotenv").config()
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

const post = [
  {
    name: `mike`,
    title: `Post1`,
  },
  {
    name: `smiles`,
    title: `Post2`,
  },
];

app.get("/posts", (req, res) => {});
app.post("/login", (req, res) => {});
let port = 8080;
app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
