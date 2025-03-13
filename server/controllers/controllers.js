const registerModel = require("../models/register.model");

const { MailIt } = require("../middleware/nodemailer");

const GeneratePass = require("../controllers/passwordGen");
const userRegistration = async (req, res) => {
  try {
    let filesData = req.files;

    const {
      frstname,
      email,
      govid,
      address,
      date,
      password,
      lastname,
      gender,
    } = req.body;
    console.log(req.body);

    const dataRegistered = await registerModel.create({
      frstname: frstname,
      email: email,
      govid: govid,
      address: address,
      date: date,
      password: password,
      lastname: lastname,
      gender: gender,
      img: filesData,
    });

    let pss = await GeneratePass();

    await MailIt(dataRegistered, pss);

    res
      .status(200)
      .json({ success: "Registration SuccessFully", rsp: dataRegistered });
  } catch (error) {
    console.log(error);

    res.status(200).send("Something went Wrong");
  }
};

module.exports = { userRegistration };
