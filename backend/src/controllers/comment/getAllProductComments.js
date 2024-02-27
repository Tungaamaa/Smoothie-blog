const mongoose = require("mongoose");
const ProductComment = require("../../models/productComment");

const getAllProductComments = async (req, res) => {
  const { recipeId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(recipeId)) {
    return res.status(404).json({ message: "Id is not valid" });
  }

  const comments = await ProductComment.find({ product: recipeId }).populate({
    path: "user",
    select: "email",
  });

  if (!comments) return res.status(404).json({ message: "Comments not found" });

  res.status(200).json(comments);
};

module.exports = {
  getAllProductComments,
};