const registerModel = require("../models/register.model");

const { MailIt } = require("../middleware/nodemailer");

const GeneratePass = require("../controllers/passwordGen");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

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
   

    if (
      (!frstname,
      !email,
      !govid,
      !address,
      !date,
      !password,
      !lastname,
      !gender)
    ) {
      res.status(400).send("All Fields Are Required");
    }

    let rspData = await registerModel.findOne({ email });

    if ( rspData!==null) {
      res.status(400).send("User Already Exists");
    }

    const salt = bcrypt.genSaltSync(10);
      let hashPassword

    try {

      hashPassword = await bcrypt.hash(password, salt);


    } catch (error) {
      res.status(400).send("Unable to Hash");

      console.log(error);
    }



    let accNo= Date.now();


    let beginIfsc="LIB"

    let ifsc=  beginIfsc+  Date.now();


    let pss = await GeneratePass();

  


    const dataRegistered = await registerModel.create({
      frstname: frstname,
      acno:accNo,
      ifsc:ifsc,
      pin:pss,
      email: email,
      govid: govid,
      address: address,
      date: date,
      password: hashPassword,
      lastname: lastname,
      gender: gender,
      img: filesData,
    })

   

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
