let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    username: { type: String, require: true },
    email: { type: String, match: /@/ },
  },
  { timestamps: true }
);

let User = mongoose.model("User", userSchema); // create model equal to collection

// export model

module.exports = User;
