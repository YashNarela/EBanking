const express = require("express");

const route = express.Router();
const { upload } = require("../middleware/multer");
const { userRegistration } = require("../controllers/controllers");

const { userLogin } = require("../controllers/login");

const { Auth } = require("../middleware/ValidUser");

const { UserData } = require("../controllers/userdata");

const { AddMoney } = require("../controllers/addMoney");

const {GetData}=require("../controllers/getData")

route.post("/register", upload.array("image", 5), userRegistration);

route.post("/auth", Auth, UserData);
route.post("/addmoney", AddMoney);

route.post("/login", userLogin);

route.get("/getdata",GetData)

module.exports = route;
