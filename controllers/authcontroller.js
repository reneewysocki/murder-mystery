const db = require('../models');

var exports = (module.exports = {});

exports.signup = function(req, res) {
  //console('error to show', req.flash('error'));
  res.render('signup', {
    message: req.flash('error'),
  });
};

exports.signin = function(req, res) {
  //console.log(req.flash('error').toString());
  res.render('signin', {
    message: req.flash('error').toString(),
  });
};

exports.dashboard = function(req, res) {
  res.render('dashboard', {
    first: req.user.firstname,
    last: req.user.lastname,
    //get ending information for opacity
    e1: req.user.ending1,
    e2: req.user.ending2,
    e3: req.user.ending3,
    e4: req.user.ending4,
    e5: req.user.ending5,
    e6: req.user.ending6,
    e7: req.user.ending7,
    e8: req.user.ending8,
    e9: req.user.ending9,
    e10: req.user.ending10,
    e11: req.user.ending11,
    e12: req.user.ending12,
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
        ending11: 0,
        ending12: 0,
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
