const express = require("express");
require("dotenv").config();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./router/user.router");
const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

async function run() {
  await mongoose.connect(
    `mongodb+srv://${process.env.id}:${process.env.pass}@mongoose.nndiide.mongodb.net/?retryWrites=true&w=majority`
  );
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}
run();

app.use("/api/user", userRouter);
