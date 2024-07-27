var express = require('express');
var router = express.Router();
const jwt=require('../middlewares/authentication')
const project=require('../controllers/project')
const event=require('../controllers/event')
router.post('/create',jwt,project.create)
router.delete('/delete',jwt,project.delete)
router.get('/get',jwt,project.get)
router.post('/create/event/:id',jwt,event.create)
module.exports = router;