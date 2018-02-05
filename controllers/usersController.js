//Require the Schemas in models directory
const db = require("../models");

// Defining methods for the usersController (exported to routes)
//...
module.exports = {
  findAll: function(req, res) {
    db.Users
      .find(req.query)
      .sort({ userName: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};