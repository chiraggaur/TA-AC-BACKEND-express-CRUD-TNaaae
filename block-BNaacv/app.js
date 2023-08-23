let express = require("express");
let mongoose = require("mongoose");
let userrouter = require("./routes/users");
let path = require("path");

// mongoose connected to db

mongoose.connect("mongodb://127.0.0.1:27017/user-diary");

// app initiate

let app = express();

// middlewares

app.use(express.json());
app.use(express.urlencoded());
app.use("/users", userrouter);

// view engine

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //

//routes in seprate folder----

// error 404 or server

app.use((req, res, next) => {
  res.send("page not found");
});

// server

app.listen(7000, () => {
  console.log("server is live");
});
