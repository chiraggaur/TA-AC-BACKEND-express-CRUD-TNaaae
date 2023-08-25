let express = require("express");
let route = express.Router();
let User = require("../models/User");

// routes through route

// create users route
route.post("/", (req, res) => {
  User.create(req.body);
  res.redirect("/users/");
});
// read users route

route.get("/", async (req, res) => {
  let data = await User.find({});
  res.render("usercreate.ejs", { user: data });
});

//update

route.put("/:id", async (req, res) => {
  let id = req.params.id;
  let data = await User.findByIdAndUpdate(id, req.body);
  res.redirect("/users/");
});

// delete user
route.delete("/:id", async (req, res) => {
  let id = req.params.id;
  await User.findByIdAndDelete(id);
  res.redirect("/users/");
});
// export route

module.exports = route;

// 64e82bb8d3fe466e9995abda - blank

// 64e82b13d3fe466e9995abd7 - abshishe
