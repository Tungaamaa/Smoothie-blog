const Recipe = require("../../models/recipe");

const createRecipe = async (req, res) => {
  const { title, description, type, image } = req.body;

  const userId = req.user._id;

  try {
    if (
      !title ||
      !description ||
      !userId ||
      !type ||
      !image
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    } else {
      const recipe = await Recipe.create({
        title,
        description,
        userId,
        type,
        image,
      });

      res.status(201).json(recipe);
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  createRecipe,
};
