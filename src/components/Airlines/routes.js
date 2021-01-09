const express = require("express");
const router = express.Router();

const { CreateAirline } = require("./controller");

router.route("/").post(CreateAirline);

module.exports = router;
