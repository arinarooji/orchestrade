//User Accounts Schema

//Dependencies
const mongoose = require("mongoose");
const bcrypt = require ("bcrypt")
const Schema = mongoose.Schema;
// handle our mongoose connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});

// We will need to create an .env with our new mlab DB
mongoose.connect(process.env.MURL || "mongodb://localhost/orchestradeDB");

// mongoose.connect('mongodb://localhost/orchestradeDB');
//Schema

const usersSchema = new Schema({
  school: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      },
      message: "Please enter a valid email!"
    }
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function validatePW(password) {
        if (password.length < 6) {
          return false;
        } else {
          return true;
        }
      },
      message: "Password needs to be longer than 6 Characters!"
    }
  },
});

usersSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

const Users = mongoose.model("Users", usersSchema);

//Export
module.exports = Users;