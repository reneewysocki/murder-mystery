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
  console.log(req.user.firstname, req.user.lastname);
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
