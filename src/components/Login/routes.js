const express = require("express");
const router = express.Router();

const { CreateRegister, Login } = require("./controlller");

router.route("/register").post(CreateRegister);
router.route("/").post(Login);

module.exports = router;
