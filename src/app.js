const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const orderRoutes = require("./routes/orderRoutes");
const errorMiddleware = require("./middlewarw/errorMiddlewarw");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/order", orderRoutes);

app.use(errorMiddleware);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;