var express = require('express');
var router = express.Router();
const history=require('../controller/historycontroller')


router.post('/',history.uploadProduct);
router.get('/',history.getProduct)
module.exports = router;

