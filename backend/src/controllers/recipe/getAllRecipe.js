const Recipe = require("../../models/recipe");

const getAllRecipes = async (req, res) => {
  const userId = req.user._id;

  const recipes = await Recipe.find({
    $or: [{ userId }, { type: "public" }],
  })
    .populate({
      path: "comments",
      populate: { path: "user", select: "email" },
    })
    .populate({
      path: "user",
      select: "email",
    });
  if (!recipes) {
    return res.status(404).json({ message: "Recipes not found" });
  }

  res.status(200).json(recipes);
};

module.exports = {
  getAllRecipes,
};
