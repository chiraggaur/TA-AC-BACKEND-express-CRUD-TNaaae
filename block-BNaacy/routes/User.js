let express = require("express");
let routes = express.Router();

// routes

routes.get("/new", (req, res) => {
  res.render("index");
});

routes.post("/", (req, res) => {
  res.render("userslist", { user: req.body });
  User.create(req.body);
});

module.exports = routes;
