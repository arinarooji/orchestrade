const router = require("express").Router();
const userRoutes = require("./users");
const inventoryRoutes = require("./inventory");
const templateRoutes = require("./templates");

//Child directories of "/api", apiRoutes

// Users route
router.use("/users", userRoutes);
// Inventory route
router.use("/inventory", inventoryRoutes);
// Template route
router.use("/templates", templateRoutes);

module.exports = router;