const Connection = require("../../DB/DBMysql");

module.exports = {
  async CreateRegister({
    StrCedula,
    StrNombre,
    StrApellido,
    StrUsuario,
    StrClave,
    StrDtNacimiento,
  }) {
    let DB = Connection();
    await new Promise((resolve, reject) => {
      DB.promise()
        .query("CALL SP_Registro(?,?,?,?,?,?)", [
          StrCedula,
          StrNombre,
          StrApellido,
          StrUsuario,
          StrClave,
          StrDtNacimiento,
        ])
        .then(([rows]) => {
          resolve(rows);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  async Login({ StrUser, StrPassword }) {
    const DB = Connection();
    const Data = await new Promise((resolve, reject) => {
      DB.promise()
        .query("Call SP_Login(?,?)", [StrUser, StrPassword])
        .then(([rows]) => {
          resolve(rows[0][0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return Data;
  },
};
