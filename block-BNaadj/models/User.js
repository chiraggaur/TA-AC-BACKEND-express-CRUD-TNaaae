let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String, requires: true },
    email: { type: String, match: /@/, requires: true },
    age: { type: Number },
    address: { type: String },
    bio: { type: String },
    hobbies: [String],
  },
  { timestamp: true }
);

let User = mongoose.model("User", userSchema); // same as collection db

module.exports = User;
