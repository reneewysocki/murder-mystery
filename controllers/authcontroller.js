const db = require('../models');

var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render('signup');
};

exports.signin = function(req, res) {
  res.render('signin');
};

exports.dashboard = function(req, res) {
  res.render('dashboard', {
    first: req.user.firstname,
    last: req.user.lastname,
  });
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
};

exports.reset_endings = function(req, res) {
  db.user
    .update(
      //reset all endings
      {
        ending1: 0,
        ending2: 0,
        ending3: 0,
        ending4: 0,
        ending5: 0,
        ending6: 0,
        ending7: 0,
        ending8: 0,
        ending9: 0,
        ending10: 0,
      },
      {
        where: {
          id: req.user.id,
        },
      }
    )
    .then(function(result) {
      res.redirect('/');
    });
};
