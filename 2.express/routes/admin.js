const express = require('express');
const router = express.Router();


const adminController = require('../controller/admin')




// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddPorudct);





module.exports = router;
//exports.routes = router;