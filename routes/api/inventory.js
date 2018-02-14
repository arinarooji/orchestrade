const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController.js");

// Matches with "/api/inventory"
router.route("/")
  .get(inventoryController.findAll)

// Matches with "/api/inventory/:id"
router
  .route("/:id")
  .get(inventoryController.findBySchoolId)
  //.put(inventoryController.update)
  //.delete(inventoryController.remove);


module.exports = router;