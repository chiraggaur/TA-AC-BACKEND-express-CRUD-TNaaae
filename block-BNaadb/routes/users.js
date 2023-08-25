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

routes.get("/:userId/edit", async (req, res) => {
  let id = req.params.userId;
  let data = await User.findById(id);
  res.render("useredit", { user: data });
  // console.log(data);
});

routes.get("/:userId/delete", async (req, res) => {
  let id = req.params.userId;
  let data = await User.findByIdAndDelete(id);
  res.render("users", { user: data });
  //   res.render("singleuser", { singleuser: data });
  //   res.redirect("/users/" + id);
  // console.log(data);
});

routes.post("/:id", async (req, res) => {
  let id = req.params.id;
  let data = await User.findByIdAndUpdate(id, req.body);
  res.redirect("/users/" + id);
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
