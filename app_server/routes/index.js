var express = require('express');
var router = express.Router();


const ctrlMain = require('../controller/main');
const  ctrlPhones = require('../controller/phones');
const  about = require('../controller/about');


router.get('/', ctrlMain.index);
router.get('/list', ctrlPhones.phonelist);
router.get('/about', about.about);
router.get('/display', about.displayNot);
router.get('/list/:phoneid', ctrlPhones.phoneInfo);
router.route('/create')
    .get(ctrlPhones.addNewPhone)
    .post(ctrlPhones.doAddNewPhone)

module.exports = router;
