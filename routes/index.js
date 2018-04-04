var express = require('express');
var router = express.Router();

var connection = require("../config/sequelize")

/* GET home page. */
router.get('/', function(req, res, next) {
  const query = "SELECT * FROM results;"
  connection.query(query, {type: connection.QueryTypes.SELECT})
      .then(results => {
    console.log(results)
  res.render("index", {title: "Express", results: results})
  })
});

module.exports = router;
