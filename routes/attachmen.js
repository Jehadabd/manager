var express = require('express');
var router = express.Router();
const jwt=require('../middlewares/authentication')
const upload=require('../middlewares/apload')
const attachmen=require('../controllers/attachmen')
router.post('/create/:id',upload.array('file',12),jwt,attachmen.add)
module.exports = router;