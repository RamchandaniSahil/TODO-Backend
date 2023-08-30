require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const todoRoute = require("./routes/todoRoute");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use(cors());
app.use("/", todoRoute);

module.exports = app;
