const router = require("express").Router();
const usersController = require("../../controllers/usersController.js");

// Matches with "/api/users"
router.route("/login")
  .get(usersController.findById)
  
router.route("/signup")
  .post(usersController.create)

module.exports = router;