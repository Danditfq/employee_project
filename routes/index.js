var express = require('express');
var router = express.Router();
var indexRouter = require('../controllers/indexController')
var multer = require('multer')

let r = (Math.random() + 1).toString(36).substring(7);

var storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/imgprofile')
    },
    filename : (req,res,cb) =>{
        cb(null, r + '-'+'.jpg')
    }
})

const img = multer({storage : storage})

/* GET home page. */
router.get('/', indexRouter.get)
router.post('/', img.single('photo'), indexRouter.post)
router.delete('/', indexRouter.delete)

module.exports = router;
