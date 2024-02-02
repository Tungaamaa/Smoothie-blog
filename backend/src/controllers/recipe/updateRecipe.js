const Recipe = require("../../models/recipe");
const mongoose = require("mongoose");

const updateRecipe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(400).json({ message: "Invalid recipe id" });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(
        id,
        {...req.body}, 
        { new: true}
    );

    if (!updatedRecipe) {
        res.status(404).json({ message: "Recipe not found" });
        return;
    }

    res.status(200).json(updatedRecipe);
};

module.exports = {
    updateRecipe,
};