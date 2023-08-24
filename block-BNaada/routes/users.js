let express = require("express");
const User = require("../models/User");
let routes = express.Router();

// routes

routes.get("/new", (req, res) => {
  res.render("index");
});

routes.get("/", async (req, res) => {
  let data = await User.find({});
  res.render("users", { user: data });
});

routes.post("/", (req, res) => {
  User.create(req.body);
  res.redirect("/users/");
});

routes.get("/:id", async (req, res) => {
  let id = req.params.id;
  let data = await User.findById(id);
  res.render("singleuser", { singleuser: data });
  //   console.log(data);
});

module.exports = routes;

// _id: ObjectId("64e69e241c6350a2a77abca6"),

// _id: ObjectId("64e6a0b91c67d0a440a51ecd"),
