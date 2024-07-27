var express = require('express');
var router = express.Router();
const jwt=require('../middlewares/authentication')
const task=require('../controllers/task')
router.post('/create/:id',jwt,task.create)
router.get('/getTask',jwt,task.getMyTask)
router.put('/doneTask/:id',jwt,task.doneTask)
module.exports = router;