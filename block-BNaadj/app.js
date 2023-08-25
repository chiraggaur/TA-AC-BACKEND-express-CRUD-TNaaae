let express = require("express");
const { default: mongoose } = require("mongoose");
let moongoose = require("mongoose");
let path = require("path");
let userroute = require("./routes/users");
// let User = require("./models/User");

// connect mongoose to db

mongoose.connect("mongodb://127.0.0.1:27017/user-diary-3");

// initiate http request
let app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static middleware

app.use(express.static(path.join(__dirname, "public")));

// routing middleware
app.use("/users", userroute);
// views engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// error handler

app.use((req, res, next) => {
  res.send("page not found");
});

// create server

app.listen(3000, () => {
  console.log("server is live");
});
