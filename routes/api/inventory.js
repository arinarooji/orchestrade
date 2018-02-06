const router = require("express").Router();
const usersController = require("../../controllers/inventoryController.js");

// Matches with "/api/inventory"
router.route("/")
  .get(inventoryController.findAll)

  
module.exports = router;