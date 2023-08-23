let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let usersSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, match: /@/ },
  },
  { timestamps: true }
);

let User = mongoose.model("User", usersSchema); // create model

// export model

module.exports = User;
