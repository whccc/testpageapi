require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { server } = require("./config/index");
const indexRouter = require("./routes/index");

app.use(express.json({ limit: "20mb" }));
app.use(cors());

app.use("/api", indexRouter);

app.listen(server.port, () => {
  console.log("Server escuchando por" + server.port);
});
