const Model = require("./model");
module.exports = {
  async CreateAirline(req, res) {
    console.log(req.body);
    await Model.CreateAirline(req.body);
    res.json(true);
  },
};
