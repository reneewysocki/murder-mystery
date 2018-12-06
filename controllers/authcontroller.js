var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render('signup');
  console.log('i have the high ground');
};

exports.signin = function(req, res) {
  console.log('renee!');
  res.render('signin');
};

exports.dashboard = function(req, res) {
  console.log('dashy!');
  res.render('dashboard');
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
};
