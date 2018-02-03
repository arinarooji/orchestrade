//Global Inventory Schema
//...

//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const articleSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  url: { type: String, required: true }
});

const Article = mongoose.model("Article", articleSchema);

//Export
module.exports = Article;