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
};
