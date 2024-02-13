const express = require("express");
const {signInUser} = require("../controllers/user/signInUser");
const {signUpUser} = require("../controllers/user/signUpUser");


const router = express.Router();

router.post("/sign-in", signInUser);
router.post("/sign-up", signUpUser);



module.exports = router;