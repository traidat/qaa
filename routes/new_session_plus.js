var express = require('express')
var router = express.Router();
var database = require('../model/database');
var conn = db.getConnection(); 

router.get('/', function (req, res) {
	res.render('new_session_plus');
});

module.exports = router;
