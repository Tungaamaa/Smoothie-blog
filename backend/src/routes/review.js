const express = require("express");
const auth = require("../middleware/auth");

// const { getAllWorkoutComments } = require("../controllers/workoutComment");
const { createReview } = require("../controllers/review/createReview");
// const { deleteWorkoutComment } = require("../controllers/workoutComment");
// const { updateWorkoutComment } = require("../controllers/workoutComment");

const router = express.Router();

router.use(auth);

// GET /workouts/:workoutId/comments
// router.get("/:workoutId/comments", getAllWorkoutComments);

// POST /workouts/:workoutId/comments
router.post("/:reviewId/reviews", createReview);

// // DELETE /workouts/:workoutId/comments/:commentId
// router.delete("/:workoutId/comments/:commentId", deleteWorkoutComment);

// // PUT /workouts/:workoutId/comments/:commentId
// router.put("/:workoutId/comments/:commentId", updateWorkoutComment);

module.exports = router;