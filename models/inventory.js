//Global Inventory Schema
//...

//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const inventorySchema = new Schema({
  instrumentName: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true
  }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

//Export
module.exports = Inventory;