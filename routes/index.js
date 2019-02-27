let express = require('express');
let UsersController = require('../controllers/userController');
let middlewareAuth = require('../utils/auth/middleAuth');
let router = express.Router();
let uc = new UsersController();

router.get('/',middlewareAuth,(req,res)=>{
    uc.getAll(req,res);
});
router.post('/',middlewareAuth,(req,res)=>{
    uc.create(req,res);
});
module.exports = router;