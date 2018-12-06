var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);

  // app.post(
  //   '/signup',
  //   passport.authenticate('local-signup', {
  //     successRedirect: '/dashboard',
  //     failureRedirect: '/signup',
  //   })
  // );

  app.post('/signup', function(req, res, next) {
    console.log(req.body);
    passport.authenticate('local-signup', function(err, user, info) {
      // Just to see the sample expected output
      res.send(JSON.stringify(info)).status(200);
    })(req, res, next); // passport.authenticate ends here
  });
};
