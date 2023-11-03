const express=require('express');
const { add } = require('../Controllers/infoController');

const router=express.Router();

router.route('/add').post(add)

module.exports=router;