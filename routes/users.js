var express = require('express');
var router = express.Router();
const user=require('../controllers/user')

const validtor=require('../middlewares/validtor')
/* GET users listing. */
router.post('/sgin',validtor.userValidationRules(),user.register)
router.get('/login',validtor.userValidationRules(),user.login)
module.exports = router;
