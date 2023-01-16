const express = require('express');
const  productsController = require('../../controller/productsController');
const router = express.Router();


router.get('/api/v1', productsController.getAllProducts )
router.get('/api/v1/:productID', productsController.getAllProducts )


module.exports = router;