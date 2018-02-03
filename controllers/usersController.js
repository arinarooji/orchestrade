//Require the Users Schema
const db = require("../models/users.js");

// Defining methods for the usersController (exported to routes)
//...
module.exports = {
  findAll: function(req, res) {
    db.Users
      .find(req.query)
      .sort({ userName: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};