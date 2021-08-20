const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Novigrad Library' });
// });

// GET home page.
router.get('/', function (req, res) {
  res.redirect('/catalog');
});

module.exports = router;


//Summary 
//I used the Express Application Generator tool to create a skeleton website and application.

//there are routes for requesting different information
//Pug template engine, a Express/JavaScript templating languages...it's an html template, the way to bind variables to html. The template gets bound to the route. 

// The app routes are stored in separate modules under the routes/ directory. The templates are stored under the /views directory.