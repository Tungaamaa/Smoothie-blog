const RecipeReview = require("../../models/recipeReview");
const Recipe = require("../../models/review");

const createReview = async (req, res) => {
  const { recipeId } = req.params;
  const { review } = req.body;

  const userId = req.user._id;

  try {
    if (!review || !recipeId) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingRecipe = await Recipe.findById(recipeId);

    if (!existingRecipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    const newRecipe = await RecipeReview.create({
      review,
      user: userId,
      recipe: recipeId,
    });

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      recipeId,
      { $push: { reviews: newReview._id } },
      { new: true }
    )
      .populate({
        path: "reviews",
        populate: { path: "user", select: "email" },
      })
      .populate({
        path: "user",
        select: "email",
      });

    return res.status(201).json(updatedRecipe);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createReview,
};