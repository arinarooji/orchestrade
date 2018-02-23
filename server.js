const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const index = require("./routes/api")
const users = require("./routes/api/users")
const PORT = process.env.PORT || 3001;
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('PORT', process.env.PORT || 3001)
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use("/", routes);
app.use('/api', index);
app.use('/api/users', users)


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
