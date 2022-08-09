var express = require('express');
var router = express.Router();

const ctrlPhones = require('../controllers/phone');

router.get('/phones', ctrlPhones.getPhones);
router.post('/createPhone', ctrlPhones.createPhone);
router.get('/phones/:phoneid', ctrlPhones.getSinglePhone);
router.put('/updatePhone/:phoneid', ctrlPhones.updatePhone);
router.delete('/deletePhone/:phoneid', ctrlPhones.deletePhone);

module.exports = router;