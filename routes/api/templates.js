const router = require("express").Router();
const templatesController = require("../../controllers/templatesController.js");

// Matches with "/api/templates"
router.route("/")
  .get(templatesController.findAll)
  

module.exports = router;