const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController.js");

// Matches with "/api/inventory"
router.route("/")
  .get(inventoryController.findAll)


module.exports = router;