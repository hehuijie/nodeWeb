var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'nodeExpress' });
});

router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '注册' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});

router.get('/imageShow', function(req, res, next) {
  res.render('imageShow', { title: '图片' });
});

module.exports = router;
