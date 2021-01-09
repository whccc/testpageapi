const Connection = require("../../DB/DBMysql");
module.exports = {
  async CreateAirline({ strNombre, intIdCiudad }) {
    const DB = Connection();
    await new Promise((resolve, reject) => {
      DB.promise()
        .query("Call SP_CrearAerolinea(?,?)", [strNombre, intIdCiudad])
        .then(([rows]) => {
          resolve(rows);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
