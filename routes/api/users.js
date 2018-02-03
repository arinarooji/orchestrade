const router = require("express").Router();
const usersController = require("../../controllers/usersController.js");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)

module.exports = router;