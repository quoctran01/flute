const express = require('express');
const productRouter = express.Router();
const productController = require('../controller/productController');
const userMiddleWare = require('../middleware/userMiddleware');

// productRouter.post('/createProduct',userMiddleWare.verifyTokenFromAdmin ,productController.createProduct);
// productRouter.post('/createProduct' ,productController.addProduct);
productRouter.post('/createProduct' ,productController.createProduct);

productRouter.get('/getProduct/:id', productController.getProduct);

productRouter.get('/getAllProducts', productController.getAllProducts);

productRouter.get('/search/:key', productController.searchProduct)
// productRouter.delete('/:id',userMiddleWare.verifyTokenFromAdmin,  productController.deleteProduct);
productRouter.delete('/:id', productController.deleteProduct);

// productRouter.put('/:id',userMiddleWare.verifyTokenFromAdmin,  productController.editProduct);
productRouter.put('/:id', productController.editProduct);



module.exports = productRouter;