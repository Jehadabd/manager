var express = require('express');
var router = express.Router();
const jwt=require('../middlewares/authentication')
const comment=require('../controllers/comment')
router.post('/create/:id',jwt,comment.create)
module.exports = router;