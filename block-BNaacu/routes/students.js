let express = require("express");
let router = express.Router();

router.get("/new", (req, res) => {
  let list = ["ankit", "suraj", "prashant", "ravi"];
  res.render("index", { list: list });
});

router.get("/:id", (req, res) => {
  res.render("studentDetail", {
    student: { name: "rahul", email: "rahul@altcampus.io" },
  });
});

// - create student form => GET request on "/students/new"

// - create a student => POST request on "/students" route

// - list all students => GET request on "/students" route

//   - render an ejs template
//   - pass array of students to template as second argument like

//   ```js
//   res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
//   ```

module.exports = router;
