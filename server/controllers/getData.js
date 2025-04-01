const registerModel = require("../models/register.model");

const GetData = async (req, res) => {
  try {
    let rsp = await registerModel.findOne().populate("trans");

    res.send({ msg: "ok", rsp: rsp });
  } catch (error) {

    console.log(error);
    
  }
};

module.exports = { GetData };
