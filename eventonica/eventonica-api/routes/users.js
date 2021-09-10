var express = require('express');
var router = express.Router();

//capitalize Users
let users = [
  { name: "Marlin", email: "marlin@gmail.com", id: "1" },
  { name: "Nemo", email: "nemo@gmail.com", id: "2" },
  { name: "Dory", email: "dory@gmail.com", id: "3" },
]




// GET users listing.
router.get('/', function (req, res, next) {
  res.send(users);
});

module.exports = router;

//POST users 
router.post('/', function (req, res) {
  newUser = req.body;
  console.log(req.body);
  users.push(newUser);
  res.json(newUser);
});


// DELETE a User
// you have to add a new endpoint w/ the id so that you can capture it
router.delete('/users/id/:userId', function (req, res) {
  const id = req.params.userId;
  console.log(users);
  console.log(req.params);
  console.log(req.body);
  // remove item by id
  // you are automatically updating users w/ filter
  users = users.filter((user) => user.id !== id);

  console.log(users);
  res.send('Delete');
});
