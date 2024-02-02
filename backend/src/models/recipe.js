const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
    {
        title : {
            type: String,
            required: [true, "Product name is required"]
        },
        description : {
            type: String,
            required: [true, "Product description is required"]
        },
        userId: {
            type: String,
            required: [true, "Product userId is required"],
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
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Recipe", recipeSchema);