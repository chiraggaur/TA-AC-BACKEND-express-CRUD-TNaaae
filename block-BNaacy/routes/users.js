let express = require("express");
const User = require("../models/User");
let routes = express.Router();

// routes

routes.get("/new", (req, res) => {
  res.render("index");
});

routes.post("/", (req, res) => {
  User.create(req.body);
});

module.exports = routes;
