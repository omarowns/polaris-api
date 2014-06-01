var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET /register */
router.get('/register',function(req, res){
  res.render('register', {title: 'Crear usuario'});
});

/* GET /login */
router.get('/login',function(req, res){
  res.render('login', {title: 'Iniciar Sesión'});
});

/* GET /logout */
router.get('/logout',function(req, res){
  res.render('logout', {title: 'Cerrar Sesión'});
});

/* GET /get */
router.get('/get',function(req, res){
  res.render('get', {title: 'Listar Recordatorios'});
});

/* GET /post */
router.get('/post',function(req, res){
  res.render('post', {title: 'Crear Recordatorio'});
});

/* GET /update */
router.get('/update',function(req, res){
  res.render('update', {title: 'Actualizar Recordatorio'});
});

/* GET /delete */
router.get('/delete',function(req, res){
  res.render('delete', {title: 'Borrar Recordatorio'});
});


module.exports = router;
