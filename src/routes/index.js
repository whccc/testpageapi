const express = require("express");
const router = express.Router();
const Airlines = require("../components/Airlines/routes");
const Login = require("../components/Login/routes");
const Flight = require("../components/Flight/routes");

router.use("/Airlines", Airlines);
router.use("/Login", Login);
router.use("/Flight", Flight);

module.exports = router;
