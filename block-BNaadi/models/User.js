let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, match: /@/ },
    age: { type: Number },
    bio: { type: String },
  },
  { timestamp: true }
);

let User = mongoose.model("User", userSchema); // same as collection db

module.exports = User;
