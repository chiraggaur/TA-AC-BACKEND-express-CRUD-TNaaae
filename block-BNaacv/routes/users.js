let express = require("express");
let router = express.Router();

// routes

router.get("/", (req, res) => {
  let users = ["ankit", "anubhav", "anmol"];
  res.render("users.ejs", { users: users });
});

router.get("/:id", (req, res) => {
  let usersForm = { name: "ankit", age: "21", email: "ankit123@gmail.com" };
  res.render("singleUser.ejs", { users: usersForm });
});

router.get("/new", (req, res) => {
  res.render("userForm.ejs");
});
module.exports = router;
