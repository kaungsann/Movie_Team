require("dotenv").config();

const express = require("express");

let server = express();
server.use(express.json());
const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);
const userRouter = require("./Routers/userRouter");

server.use("/user", userRouter);

server.use("/", (req, res, next) => {
  res.status(200).json({
    mes: "hello testing server",
  });
});

server.use((err, req, res, next) => {
  err.status = err.status || 500;
  res.status(err.status).json({
    con: false,
    message: err.message,
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server runnning on port ${process.env.PORT}`);
});
