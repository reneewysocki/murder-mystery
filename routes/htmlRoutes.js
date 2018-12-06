const db = require('../models');

module.exports = function(app) {
  // Load index page
  app.get('/', (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      res.render('index', {
        msg: 'Welcome!',
        examples: dbExamples,
      });
    });
  });

  // Load example page and pass in an example by id
  app.get('/murder', function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render('murder', {
        example: dbExample,
      });
    });
  });

  //temporary debug route for userpofile before integration to site
  app.get('/user', (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      res.render('profileView', {
        msg: 'Welcome!',
        examples: dbExamples,
      });
    });
  });

  //user dashboard route for userpofile before integration to site
  app.get('/dashboard', (req, res) => {
    res.render('dashboard');
  });

  // Load example page and pass in an example by id
  app.get('/murder/:id', function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render('murder', {
        example: dbExample,
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
