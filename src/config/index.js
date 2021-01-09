module.exports = {
  server: {
    port: process.env.APP_PORT,
    domain: "localhost",
  },
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  },
};
