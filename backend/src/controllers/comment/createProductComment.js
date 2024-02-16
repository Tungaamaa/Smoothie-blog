const ProductComment = require("../../models/productComment");
const Recipe = require("../../models/recipe");

const createProductComment = async (req, res) => {
  const { comment } = req.body;
  const { recipeId } = req.params;
  const userId = req.user._id;
  const userEmail = req.user.email;

  console.log("createProductComment", recipeId);

  try {
    if (!comment) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingProduct = await Recipe.findById(recipeId);
    console.log(existingProduct);
    if (!existingProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const NewComment = await ProductComment.create({
      comment: comment,
      user: userId,
      product: recipeId,
    });

    const updatedProduct = await Recipe.findByIdAndUpdate(
      recipeId,
      { $push: { comments: NewComment._id } },
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

    res.status(201).json({
      updatedProduct,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { createProductComment };