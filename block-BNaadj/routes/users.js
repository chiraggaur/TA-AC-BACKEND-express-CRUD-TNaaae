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

route.put("/:id", async (req, res) => {
  let id = req.params.id;
  let data = await User.findByIdAndUpdate(id, req.body);
  //   res.redirect("/users/");
  console.log(data);
});

// redirect to users edit form
route.get("/:id/edit", async (req, res) => {
  let id = req.params.id;
  let data = await User.findById(id);
  res.render("userForm", { user: data });
});

// edit user
// route.put("/:id", async (req, res) => {
//   let id = req.params.id;
//   let data = await User.findByIdAndUpdate(id, req.body);
//   //   res.render("updatedDetails", { user: data });
// });

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
