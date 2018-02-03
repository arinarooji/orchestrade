const router = require("express").Router();
const userRoutes = require("./users.js");

// Users route
router.use("/users", userRoutes);

module.exports = router;