const express = require("express");
const router = express.Router();
const Airlines = require("../components/Airlines/routes");

router.use("/Airlines", Airlines);

module.exports = router;
