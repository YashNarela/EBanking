const express = require("express");

const route = express.Router();
const { upload } = require("../middleware/multer");
const { userRegistration } = require("../controllers/controllers");

route.post("/register",  upload.array("image",5) ,userRegistration);

module.exports = route;
