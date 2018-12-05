require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("passport");
var session = require("express-session");
var env = require('dotenv').load();

var db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.static('public'));

// For Passport

// app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

// Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
  })
);
app.set("view engine", "handlebars");
//pp.set('views', './views');

// Routes
require("./routes/auth")(app);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// require("./routes/auth")(app,passport);
//load passport strategies
//require('./config/passport/passport.js')(passport, models.user);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});

module.exports = app;
