const Model = require("./model");

module.exports = {
  async CreateRegister(req, res) {
    await Model.CreateRegister(req.body);
    res.json({
      Success: true,
      Message: "Usuario creado con éxito.",
    });
  },
  async Login(req, res) {
    console.log(req.body);
    const Data = await Model.Login(req.body);
    if (Data.blnLogin) {
      res.json({
        Success: true,
        strName: Data.strNombre,
        strLastName: Data.strApellido,
      });
    } else {
      res.json({
        Success: false,
        strMessage: "Usuario no registrado",
      });
    }
  },
};
