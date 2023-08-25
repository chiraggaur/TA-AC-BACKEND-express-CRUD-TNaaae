let express = require("express");
let route = express.Router();
let User = require("../models/User");

// routes

// create users route
route.post("/", (req, res) => {
  User.create(req.body);
  res.redirect("/users/");
});
// read users route

route.get("/", async (req, res) => {
  let data = await User.find({});
  res.render("usercreate", { user: data });
});

// userdetails route

route.get("/:id", async (req, res) => {
  let id = req.params.id;
  let data = await User.findById(id);
  res.render("userDetails", { user: data });
});

//update

route.post("/:id", async (req, res) => {
  let id = req.params.id;
  let data = await User.findByIdAndUpdate(id, req.body);
  res.redirect("/users/");
});

// redirect to users edit form
route.get("/:id/edit", async (req, res) => {
  let id = req.params.id;
  let data = await User.findById(id);
  res.render("userForm", { user: data });
});

// delete user
route.get("/:id/delete", async (req, res) => {
  let id = req.params.id;
  let data = await User.findByIdAndDelete(id, req.body);
  res.redirect("/users/");
});
// export route

module.exports = route;

// 64e82bb8d3fe466e9995abda - blank

// 64e82b13d3fe466e9995abd7 - abshishe
