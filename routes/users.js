var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers')

/* GET users listing. */
router.get('/', userController.get)
router.post('/', userController.post)

module.exports = router;
