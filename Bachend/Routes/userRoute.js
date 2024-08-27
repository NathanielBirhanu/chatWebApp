const express = require("express");
const {registeruser, loginUser, findUser, getUsers} = require("../Controllers/userController"); 
const router = express.Router();

router.post("/register", registeruser);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);
router.get("/", getUsers)
module.exports = router;