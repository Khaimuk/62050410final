const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const blogRouter = require("./routes/blog");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(
  "mongodb+srv://Khaimuk:0999381711@cluster0.46dtea4.mongodb.net/node-api?retryWrites=true&w=majority"
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/blogs", blogRouter);

module.exports = app;
