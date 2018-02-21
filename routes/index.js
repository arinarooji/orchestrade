const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var mailgun = require("mailgun-js");
var mailgun = require('mailgun-js')({
  apiKey: "key-98a79e175b5f3236260b2046fc64c6fe",
  domain: "https://api.mailgun.net/v3/sandboxd7819a789d23412581323c5ab0971dd5.mailgun.org"
});

//mailgun 
router.post('/browse', function (req, res) {
  let length = req.body.length;
  let email = req.body.email;
  let name = req.body.name;
  let instrument = req.body.instrument
  const output = `
      <p>One of your instruments have been requested</p>
      <ul>
          <li> Name: ${req.body.name}</li>
          <li> Email: ${req.body.email}</li>
          <li> Phone: ${req.body.instrument}</li>
          <li> Length: ${req.body.length}</li>
      </ul>
  `
  var data = {
      from: 'Orchestrade <portillacris@gmail.com> ',
      to: 'portillacris@gmail.com',
      subject: 'An Instrument Request',
      text: 'Testing some Mailgun awesomness!',
      html: output,
  };

  mailgun.messages().send(data, function (error, body) {
      console.log(body);
  });
}),

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;