const express = require('express')
const discountRouter = express.Router();
const discountController = require('../controller/discountController')

discountRouter.post('/createDiscount', discountController.createDiscount)

discountRouter.get('/getDiscount/:id', discountController.getDiscount)   

discountRouter.get('/getAllDiscount', discountController.getAllDiscount)   

discountRouter.put('/updateDiscount/:id', discountController.updateDiscount)   

discountRouter.delete('/deleteDisCount/:id', discountController.deleteDiscount)   

module.exports = discountRouter