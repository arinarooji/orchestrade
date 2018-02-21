const router = require("express").Router();
const usersController = require("../../controllers/usersController.js");
const oktaClient = require('../../lib/oktaClient');

// Matches with "/api/users"

router.post('/', (req, res, next) => {
  if (!req.body) return res.sendStatus(400);
  const newUser = {
    profile: {
      school: req.body.school,
      email: req.body.email,
      username: req.body.username,
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  };
  oktaClient.createUser(newUser)
    .then(user => {
      res.status(201);
      res.send(user);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    })
});
  
module.exports = router;
