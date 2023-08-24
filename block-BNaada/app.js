let express = require("express");
let mongoose = require("mongoose");
let path = require("path");
let userRouter = require("./routes/users");

// connect mongoose to database

mongoose.connect("mongodb://127.0.0.1:27017/user-diary");

// initiating express app

let app = express();

// inbuild middlewares

app.use(express.json()); // store json data

app.use(express.urlencoded({ extended: false })); // store forms data

// routing middlewares

app.use("/users", userRouter); // path name route

// setup view engine

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// error middleware 404 or custom error

app.get((req, res, next) => {
  res.send("page not found");
});

// custom error

app.get((err, req, res, next) => {
  res.send(err);
  next();
});

// server live

app.listen("2000", () => {
  console.log("server is line");
});
