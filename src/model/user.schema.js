const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: String,
  body: String,
});

const data = new mongoose.model("Data", dataSchema);

module.exports = data;
