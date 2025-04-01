const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    acno: {
      type: String,
    },
    trans: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "trans",
      },
    ],
    balance: {
      type: Number,
      default: 0,
    },
    ifsc: {
      type: String,
    },
    pin: {
      type: String,
    },

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
