// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const User = require("./models/user");
const routes = require("./routes/api.js");
const appConfig = require("./appConfig").configuration;
const cors = require("cors");
require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const swaggerDocument = YAML.load("./specs/api.yml");

const app = express();
app.use(cors());

const PORT = process.env.PORT || appConfig.appServer.port;
const mongoDBUrl = process.env.MONGODB_CONNECTION_STRING;
mongoose
  .connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the Database successfully");
  });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use("/specs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes(app);

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log("Server is listening on Port:", PORT);
});
