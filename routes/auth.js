var authController = require('../controllers/authcontroller.js');
var db = require('../models');

module.exports = function(app, passport) {
  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);

  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/dashboard',
      failureRedirect: '/signup',
      failureFlash: true,
    })
  );

  //storyboard routing
  app.get('/murder/:id', isLoggedIn, function(req, res) {
    db.murders.findById(req.params.id).then(action => {
      console.log(action.action);
      res.render('murder', {
        action: action.action,
        optionOne: action.optionOne,
        optionOneLink: action.optionOneLink,
        optionTwo: action.optionTwo,
        optionTwoLink: action.optionTwoLink,
        endpoint: action.endpoint,
      });
      //now handle case where we hit ending
      //console.log('hi paul ', req.params.id);
      const murderId = req.params.id;
      console.log('hey is user here?', req.user.id);
      switch (murderId) {
        case '5':
          updateEnding(1, req);
          break;
        case '15':
          updateEnding(2, req);
          break;
        case '17':
          updateEnding(3, req);
          break;
        case '18':
          updateEnding(4, req);
          break;
        case '19':
          updateEnding(5, req);
          break;
        case '21':
          updateEnding(6, req);
          break;
        case '22':
          updateEnding(7, req);
          break;
        case '24':
          updateEnding(8, req);
          break;
        case '25':
          updateEnding(9, req);
          break;
        case '26':
          updateEnding(10, req);
          break;
        default:
          console.log("didn't hit an ending");
          break;
      }
    });
  });

  app.get('/dashboard', isLoggedIn, authController.dashboard);

  app.get('/logout', authController.logout);

  app.post(
    '/signin',
    passport.authenticate('local-signin', {
      successRedirect: '/',
      failureRedirect: '/signin',
      failureFlash: true,
    })
  );

  //user dashboard route for userpofile before integration to site
  app.get('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard');
  });

  app.post('/reset_endings', isLoggedIn, authController.reset_endings);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect('/signin');
  }
};

function updateEnding(ending, req) {
  console.log('im an ending!');
  console.log('my user id', req.user.id);
  db.user.update(
    //perform put request
    {
      [`ending${ending}`]: 1,
    },
    {
      where: {
        id: req.user.id,
      },
    }
  );
}
