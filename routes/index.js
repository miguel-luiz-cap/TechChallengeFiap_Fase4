var express = require('express');
var router = express.Router();

// var logado = true;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', bodyClass:"homepage" });
});
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login', bodyClass:"login-page" });
});

module.exports = router;
