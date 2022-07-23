const express = require("express");
const app = express();
const connectDb = require("./config/dataBase");

// Database Connection
connectDb();

module.exports = app;
