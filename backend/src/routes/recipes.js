const express = require("express");

// const {
//   createRecipe,
//   getSingleRecipe,
//   getAllRecipes,
//   updateRecipe,
//   deleteRecipe,
// } = require("../controllers/recipe");
const {createRecipe} = require("../controllers/recipe/createRecipe");
const {getSingleRecipe} = require("../controllers/recipe/getSingleRecipe");
const {getAllRecipes} = require("../controllers/recipe/getAllRecipe");
const {updateRecipe} = require("../controllers/recipe/updateRecipe");
const {deleteRecipe} = require("../controllers/recipe/deleteRecipe");

const auth = require("../middleware/auth");

const router = express.Router();

//Auth middleware
router.use(auth);

// GET /products --> get all products
router.get("/", getAllRecipes);

//GET /products/:id -->return a list of products
router.get("/:id", getSingleRecipe);

//GET /products/:id --> create a new product
router.post("/", createRecipe);

//GET /products/:id --> update a single product
router.put("/:id", updateRecipe);

//GET /products/:id --> delete a single product
router.delete("/:id", deleteRecipe);

module.exports = router;
