const Recipe = require("../../models/recipe");
const mongoose = require("mongoose");

const getSingleRecipe = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid recipe id" });
   }

   const recipe = await Recipe.findById(id);

   if (!recipe) {
    res.status(404).json({ message: "Recipe not found" });
    return;
   }
   res.status(200).json(recipe);
}

module.exports = {
  getSingleRecipe,
};
