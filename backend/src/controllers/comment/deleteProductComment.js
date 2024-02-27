const mongoose = require("mongoose");
const ProductComment = require("../../models/productComment");
const Recipe = require("../../models/recipe");

const deleteProductComment = async (req, res) => {
  const { recipeId, commentId } = req.params;
  

  if (
    !mongoose.Types.ObjectId.isValid(recipeId) ||
    !mongoose.Types.ObjectId.isValid(commentId)
  ) {
    return res.status(404).json({ message: "Id is not valid" });
  }

  const productComment = await ProductComment.findByIdAndDelete(commentId);
  if (!productComment) {
    return res.status(404).json({ message: "Comment not found" });
  }

  const product = await Recipe.findById(recipeId);

  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }

  const filteredComments = product.comments.filter(
    (comment) => comment != commentId
  );
  const updatedProduct = await Recipe.findByIdAndUpdate(
    recipeId,
    { ...req.body, comments: filteredComments },
    { new: true }
  )
  .populate({
    path: "comments",
    populate: { path: "user", select: "email" },
  })
  .populate({
    path: "user",
    select: "email",
  });
  res.status(200).json(updatedProduct);
};

module.exports = {
  deleteProductComment,
};