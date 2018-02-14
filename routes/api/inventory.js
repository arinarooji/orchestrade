const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController.js");

// Matches with "/api/inventory"
router.route("/")
  .get(inventoryController.findAll)
  .get(inventoryController.findById)

  router.route("/category/:search")
  .get(inventoryController.findByCat)


module.exports = router;