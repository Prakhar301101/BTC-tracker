const { Router } = require('express');
const router = Router();
const appController= require('../controllers/appController')


router.get('/cryptodata',appController.get_data);

module.exports=router