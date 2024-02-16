const express = require("express");
const auth = require("../middleware/auth");

const {
  createProductComment,
} = require("../controllers/comment/createProductComment");
const {
  updateProductComment,
} = require("../controllers/comment/editProductComment");
const {deleteProductComment,} = require("../controllers/comment/deleteProductComment");

const router = express.Router();

//get auth//

router.use(auth);

//GET/ products/  ---> get all product
router.post("/:recipeId/comments", createProductComment);

// DELETE /products/:workoutId/comments/:commentId
router.delete("/:recipeId/comments", deleteProductComment);

// PUT /products/:workoutId/comments/:commentId
router.put("/:recipeId/comments/", updateProductComment);

module.exports = router;