const registerModel = require("../models/register.model");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
require("dotenv").config();
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    let registerData = await registerModel.findOne({ email });

    if (!email || !password) {
      res.status(400).send(" Fill All Details");
    }

    if (registerData.email != email) {
      res.status(403).send("Invalid Email");
    }

    let rsp = await registerModel.findOne({ email });



    let hashPassword = rsp.password;

    try {
      if (!(await bcrypt.compare(password, hashPassword))) {
        res.send("password Invalid");
      }
    } catch (error) {
      console.log("Unable to Decode Password");
    }

    let token = await jwt.sign({ token: rsp._id }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });

    res.status(200).send({ msg: "ok", token: token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userLogin };
