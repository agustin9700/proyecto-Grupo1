const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')

router.get('/', productController.product)
router.get('/detalle', productController.productDetail)

module.exports = router