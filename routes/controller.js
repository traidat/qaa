var express = require('express');
var router = express.Router();

router.use('/login', require(__dirname + '/login.js'));
router.use('/signin', require(__dirname + '/signin.js'));
router.use('/new_session', require(__dirname + '/new_session.js'));
router.use('/new_session+', require(__dirname + '/new_session+.js'));
router.use('/student_manage', require(__dirname + '/student_manage.js'));
router.use('/teacher_manage', require(__dirname + '/teacher_manage.js'));

router.get('/', function (req, res) {
	res.render('main');
});

module.exports = router;

