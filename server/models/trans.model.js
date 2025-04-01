const mongoose = require("mongoose");

const trans = new mongoose.Schema({
  acno: String,

  amount: Number,

  status: String,

});

module.exports = mongoose.model("trans", trans);
