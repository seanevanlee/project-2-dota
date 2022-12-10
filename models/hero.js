const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  heroName: String,
  heroImage: String,
  heroDescription: String,
  playAgain: Boolean,
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  userName: String,
});

const heroSchema = new Schema({
  name: {
    type: String,
    //enum: ["Legion Commander", "Lina", "Necrophos"],
    required: true,
    // unique: true,
    // TODO: revisit this later.
  },
  reviews: [reviewSchema],
});

// how to get hero ID into schema
module.exports = mongoose.model("Hero", heroSchema);
