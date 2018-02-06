const router = require("express").Router();
const userRoutes = require("./users");
const inventoryRoutes = require("./inventory");

//Child directories of "/api", apiRoutes

// Users route
router.use("/users", userRoutes);
// Inventory route
router.use("/inventory", inventoryRoutes);

module.exports = router;