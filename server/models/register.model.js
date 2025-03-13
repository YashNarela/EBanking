const mongoose = require("mongoose");



const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },

    date: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    govid: {
      type: String,
      require: true,
    },
    frstname: {
      type: String,
      require: true,
    },

    lastname: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },

    img: [Object],
  },
  { timestamps: true }
);


 

module.exports = mongoose.model("register", schema);
