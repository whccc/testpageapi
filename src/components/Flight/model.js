const Connection = require("../../DB/DBMysql");
module.exports = {
  async CreateFlight({
    strOrigen,
    strDestino,
    strPrecio,
    intIdAerolinea,
    N_Asientos,
    intEstado,
  }) {
    const DB = Connection();
    await new Promise((resolve, reject) => {
      DB.promise()
        .query("Call SP_CrearVuelo(?,?,?,?,?,?)", [
          strOrigen,
          strDestino,
          strPrecio,
          intIdAerolinea,
          N_Asientos,
          intEstado,
        ])
        .then(([rows]) => {
          resolve(rows);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  async GetFlight() {
    const DB = Connection();
    const Data = await new Promise((resolve, reject) => {
      DB.promise()
        .query("Call SP_Flight()", [])
        .then(([rows]) => {
          resolve(rows[0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return Data;
  },
};
