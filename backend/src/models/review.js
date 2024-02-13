const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    recipe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      required: [true, "RecipeId is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RecipeReview", reviewSchema);
