const mongoose = require("mongoose");

const productCommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "Comment is required!"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product is required!"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("ProductComment", productCommentSchema);