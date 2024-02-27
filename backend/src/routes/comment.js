const express = require("express");
const auth = require("../middleware/auth");

const {
  createProductComment,
} = require("../controllers/comment/createProductComment");
const {
  updateProductComment,
} = require("../controllers/comment/editProductComment");
const {deleteProductComment,} = require("../controllers/comment/deleteProductComment");
const {getAllProductComments} = require("../controllers/comment/getAllProductComments");

const router = express.Router();

//get auth//

router.use(auth);

//GET /comments/:id --> create a new comment
router.post("/:recipeId/comments", createProductComment);

// DELETE /products/:workoutId/comments/:commentId
router.delete("/:recipeId/comments/:commentId", deleteProductComment);

// PUT /products/:workoutId/comments/:commentId
router.put("/:recipeId/comments/:commentId", updateProductComment);

// GET /workouts/:workoutId/comments
router.get("/:recipeId/comments", getAllProductComments);



module.exports = router;