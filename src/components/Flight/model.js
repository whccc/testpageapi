const Connection = require("../../DB/DBMysql");
module.exports = {
  async CreateFlight({
    strOrigen,
    strDestino,
    strPrecio,
    intIdAerolinea,
    N_Asientos,
    intEstado,
    strHora,
  }) {
    const DB = Connection();
    await new Promise((resolve, reject) => {
      DB.promise()
        .query("Call SP_CrearVuelo(?,?,?,?,?,?,?)", [
          strOrigen,
          strDestino,
          strPrecio,
          intIdAerolinea,
          N_Asientos,
          intEstado,
          strHora,
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
  async GetFlightByCost() {
    const DB = Connection();
    const Data = await new Promise((resolve, reject) => {
      DB.promise()
        .query("Call SP_FlightPorCosto()", [])
        .then(([rows]) => {
          resolve(rows[0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return Data;
  },
  async ReserveFlight(intIdVuelo, intIdUser) {
    const DB = Connection();
    await new Promise((resolve, reject) => {
      DB.promise()
        .query("Call SP_ReservarVuelo(?,?)", [intIdVuelo, intIdUser])
        .then(([rows]) => {
          resolve(rows);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  async GetFlightByUser({ IdUser }) {
    const DB = Connection();
    const Data = await new Promise((resolve, reject) => {
      DB.promise()
        .query("Call SP_VuelosUsuario(?)", [IdUser])
        .then(([rows]) => {
          resolve(rows[0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return Data;
  },
  async DeleteReserve({ IntId }) {
    const DB = Connection();
    await new Promise((resolve, reject) => {
      DB.promise()
        .query("Call SP_BorrarReserva(?)", [IntId])
        .then(([rows]) => {
          resolve(rows);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  async GetPlace() {
    const DB = Connection();
    const Data = await new Promise((resolve, reject) => {
      DB.promise()
        .query("Call SP_GetCiudadDepartamento()", [])
        .then(([rows]) => {
          resolve(rows[0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return Data;
  },
  async GetPlaceSearch({ strOrigen, strDestino }) {
    const DB = Connection();
    const Data = await new Promise((resolve, reject) => {
      DB.promise()
        .query("Call SP_BuscarLugar(?,?)", [strOrigen, strDestino])
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
