var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {title: "hello"});
  // res.status(200).send()
});

module.exports = router;