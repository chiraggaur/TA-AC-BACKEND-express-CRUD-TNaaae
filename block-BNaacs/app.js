let express = require("express");
let mongoose = require("mongoose");
let path = require("path");

// connect to db

mongoose.connect("mongodb://127.0.0.1:27017/school");

// initialiate request

let app = express();

// middlewares
app.use(express.json());
// setup view engine

app.set("view engine", "ejs"); // use npm install ejs to work with ejs
app.set("views", path.join(__dirname, "views"));

//routes

app.get("/", (req, res) => {
  res.render("index", { name: "Anmol" });
});

// add dynamic content to template

// server

app.listen(4000, () => {
  console.log("server is live");
});
