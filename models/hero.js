const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    reviewInfo: String,
    hero: { type: Schema.Types.ObjectId, ref: "Hero", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    playAgain: {
      type: String,
      enum: ["Definitely!", "Nope!"],
      default: null,
    },
  },
  { timestamps: true }
);

const heroSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  heroDescription: String,
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  // Embedding the reviews into a hero.
  reviews: [reviewSchema],
});

// how to get hero ID into schema
module.exports = mongoose.model("Hero", heroSchema);
