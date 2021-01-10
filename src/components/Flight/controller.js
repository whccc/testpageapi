const Model = require("./model");
module.exports = {
  async CreateFlight(req, res) {
    await Model.CreateFlight(req.body);
    res.json(true);
  },
  async GetFlight(req, res) {
    const Data = await Model.GetFlight();
    res.json(Data);
  },
  async GetFlightByCost(req, res) {
    const Data = await Model.GetFlightByCost();
    res.json(Data);
  },
  async ReserveFlight(req, res) {
    let User = req.body.DataReserva.intId;
    let Flight = req.body.DataUser.intId;
    await Model.ReserveFlight(User, Flight);
    res.json({ Success: true });
  },
  async FlightUser(req, res) {
    const Data = await Model.GetFlightByUser(req.params);
    res.json(Data);
  },
  async DeleteReserve(req, res) {
    await Model.DeleteReserve(req.body);
    res.json({
      Success: true,
    });
  },
  async GetPlace(req, res) {
    const Data = await Model.GetPlace();
    res.json(Data);
  },
  async GetPlaceSearch(req, res) {
    const Data = await Model.GetPlaceSearch(req.body);
    res.json(Data);
  },
};
