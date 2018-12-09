var db = require('../models');

module.exports = function(app) {
  // Load index page
  app.get('/', (req, res) => {
    res.render('index');
  });

  //storyboard routing
  app.get('/murder/:id', function(req, res) {
    db.murders.findById(req.params.id).then(action => {
      console.log(action.action);
      res.render('murder', {
        action: action.action,
        optionOne: action.optionOne,
        optionTwo: action.optionTwo,
      });
    });
  });

  //temporary debug route for userpofile before integration to site
  app.get('/user', (req, res) => {
    res.render('dashboard');
  });

  //user dashboard route for userpofile before integration to site
  app.get('/dashboard', (req, res) => {
    res.render('dashboard');
  });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
