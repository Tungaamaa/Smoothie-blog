const express = require("express");
const { EditProfile } = require("../controllers/user/editProfile");
const auth = require("../middleware/auth");

const router = express.Router();

router.use(auth);

router.put("/editProfile", EditProfile);

module.exports = router;