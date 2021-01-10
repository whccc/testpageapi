const express = require("express");
const router = express.Router();

const {
  CreateFlight,
  GetFlight,
  GetFlightByCost,
  ReserveFlight,
  FlightUser,
  DeleteReserve,
  GetPlace,
  GetPlaceSearch,
} = require("./controller");

router.route("/").post(CreateFlight).get(GetFlight);
router.route("/Costo").get(GetFlightByCost);
router.route("/Reserve").post(ReserveFlight);
router.route("/User/:IdUser").get(FlightUser);
router.route("/Delete").delete(DeleteReserve);
router.route("/Place").get(GetPlace);
router.route("/SearchPlace").post(GetPlaceSearch);

module.exports = router;
