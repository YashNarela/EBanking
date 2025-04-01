const registerModel = require("../models/register.model");

const transModel=require("../models/trans.model")

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const AddMoney = async (req, res) => {
  try {
    console.log(req.body);

    const { myAc, myAmount,status } = req.body;


    const rspTrans = await transModel.create({
      acno:myAc,

      amount: myAmount,

      status:status ,
    });


    let rsp = await registerModel.findOneAndUpdate(
      {
        acno: myAc,
      },
      {

        $push:
           {
             trans:rspTrans._id
           }
        
      },

      {
        new: true,
      }
    ).populate("trans")

    console.log(rsp);

    res.send({ msg: "ok", objdata: rsp });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { AddMoney };
