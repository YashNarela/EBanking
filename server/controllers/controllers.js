const registerModel = require("../models/register.model");

const userRegistration = async (req, res) => {
  try {
  
    let filesData = req.files;

    const { name, email, govid, address, date, password, lastname, gender } =
      req.body;

    const dataRegistered = await registerModel.create({
      name: name,
      email: email,
      govid: govid,
      address: address,
      date: date,
      password: password,
      lastname: lastname,
      gender: gender,
      img: filesData,
    });

    res
      .status(200)
      .json({ success: "Registration SuccessFully", rsp: dataRegistered });



      
  } catch (error) {
    console.log(error);

    res.status(200).send("Something went Wrong");
  }
};

module.exports = { userRegistration };
