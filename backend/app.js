const express = require("express");
const app = express();
const connectDb = require("./config/dataBase");
const products = require("./routes/productRoutes");
// Midleware

app.use(express.json());
// Database Connection
connectDb();

// Routes
app.use("/api/v1",products);

module.exports = app;
