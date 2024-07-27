var express = require('express');
var router = express.Router();
const jwt=require('../middlewares/authentication')
const notification=require('../controllers/notification')
router.get('/getMyNotification',jwt,notification.getMy)
router.get('/lengthOfNotification',jwt,notification.getCount)
router.put('/show/:id',jwt,notification.show)
module.exports = router;