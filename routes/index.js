var express = require('express');
var router = express.Router();
var indexRouter = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexRouter.get)
router.post('/', indexRouter.post)
router.delete('/', indexRouter.delete)

module.exports = router;
