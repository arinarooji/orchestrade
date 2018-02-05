const router = require("express").Router();
const userRoutes = require("./users");

// Users route
router.use("/users", userRoutes);

module.exports = router;