const mysql = require("mysql2");
const config = require("../config");

const Con = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
});
module.exports = () => {
  return Con;
};
