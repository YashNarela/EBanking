const jwt = require("jsonwebtoken");

const registerModel = require("../models/register.model");

require("dotenv").config();

async function Auth(req, res, next) {
  try {
    let token = req.headers.token;

    if (!token) {
      res.status(403).send("Token is Not Found");
    }

    let decode = await jwt.verify(token, process.env.JWT_KEY);

  

    let rspdata = await registerModel.findById(decode.token).select("-password");

  

    req.rspdata=rspdata

   next()
  } catch (error) {}
}

module.exports = { Auth };
