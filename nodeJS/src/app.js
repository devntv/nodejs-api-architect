const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { default: helmet } = require("helmet");
const { compile } = require("morgan");
const compression = require("compression");
const { checkOverLoad } = require("./helper/check.connect");
const app = express();

// console.log(`env::`, process.env);
//iniint middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
//init db
require("./dbs/init.mongoDB");
// checkOverLoad();
//init route
app.use("/", require("./routes"));

//handling error

module.exports = app;
