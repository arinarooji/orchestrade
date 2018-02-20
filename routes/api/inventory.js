const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController.js");

// Matches with "/api/inventory"
router.route("/")
  .get(inventoryController.findAll)
  .post(inventoryController.create)

// Matches with "/api/inventory/:id"
router
  .route("/:id")
  .get(inventoryController.findBySchoolId)
  //.get(inventoryController.findById) Two /:id routes do not work, use unique id routes if possible or find a workaround

  //.put(inventoryController.update)
  //.delete(inventoryController.remove);

router
  .route("/category/:search")
  .get(inventoryController.findByCat)

router
  .route("/instruments/:instrument")
  .get(inventoryController.findByInst)


module.exports = router;