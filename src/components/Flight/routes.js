const express = require("express");
const router = express.Router();

const { CreateFlight, GetFlight } = require("./controller");

router.route("/").post(CreateFlight);
router.route("/").get(GetFlight);

module.exports = router;
