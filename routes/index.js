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
router.get('/reservar', function(req, res, next) {
    res.render('reservar', { title: 'Reservar', bodyClass:"reservar-page" });
});


// Parte admin
router.get('/admin/login', function(req, res, next) {
    res.render('admin/login', { title: 'Login Admin', bodyClass:"login-page" });
});
router.get('/admin/administrar-reservas', function(req, res, next) {
    res.render('admin/administrar-reservas', { title: 'Administrar Reservas', bodyClass:"reservar-page" });
});

module.exports = router;
