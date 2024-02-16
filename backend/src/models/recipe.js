const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product name is required"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    image: {
      type: String,
      required: [true, "image is required"],
    },
    type: {
      type: String,
      enum: ["public", "private"],
      required: [true, "Recipe visibility is required"],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductComment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
