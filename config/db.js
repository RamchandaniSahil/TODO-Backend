const mongoose = require("mongoose");

// const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";
const MONGO_URL = "mongodb://localhost:27017";

const connectToDB = () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`Connected DB: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectToDB;
