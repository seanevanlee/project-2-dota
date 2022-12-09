const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const heroSchema = new Schema({
  name: {
    type: String,
    enum: ["Legion Commander", "Lina", "Necrophos"],
    required: true,
  },
});

mongoose.exports = mongoose.model("Hero", heroSchema);
