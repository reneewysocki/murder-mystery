const db = require('../models');

module.exports = function(app) {
  // Load index page
  app.get('/', (req, res) => {
    res.render('index');
  });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
