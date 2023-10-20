const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true},
  email: { type: String, required: true },
  caretaker: { type:String },
  isPatient : {type: Boolean},
  number : {type: String},
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
