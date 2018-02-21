const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/", routes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
});

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
