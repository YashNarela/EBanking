async function UserData(req, res) {
  try {
    const rspdata = req.rspdata;

  

    res.send({ msg: "Ok", rsp: rspdata });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { UserData };
