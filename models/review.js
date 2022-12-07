const mongoose = require("mongoose");
// shortcut
const Schema = mongoose.Schema;

const reviewSchema = new Schema({});
// stuff goes here

module.exports = mongoose.model("Review", reviewSchema);
