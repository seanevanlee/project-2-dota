const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const heroSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

mongoose.exports = mongoose.model("Hero", heroSchema);
