var express = require('express')
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
	multipleStatements: true,
	host: "localhost",
	user: "root",
	password: "",
	database: "hay"
});
router.get('/', function (req, res) {
	res.render('new_session++');
});

module.exports = router;
