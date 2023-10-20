const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name : {type: String, require: true},
  email: { type: String, require: true},
  hour: { type: String },
  minute: {type: String},
  freq: { type: String}, //sun - sat
  caretaker: {type: String},
  number : {type: String},
});

const medicationModel = mongoose.model('Medication', medicationSchema);

module.exports = medicationModel;
