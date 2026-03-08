const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const orderRoutes = require("./routes/orderRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/order", orderRoutes);

app.use(errorMiddleware);

module.exports = app;