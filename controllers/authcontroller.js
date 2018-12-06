var exports = module.exports = {}

exports.signup = function(req, res) {
  res.render('signup');
  console.log("i have the high ground");
};

exports.signin = function(req, res) {
  res.render('signin');
};
