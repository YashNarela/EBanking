const express = require("express");

const route = express.Router();
const { upload } = require("../middleware/multer");
const { userRegistration } = require("../controllers/controllers");

const { userLogin}=require("../controllers/login")



route.post("/register",  upload.array("image",5) ,userRegistration);


route.get("/login" ,userLogin)

module.exports = route;
