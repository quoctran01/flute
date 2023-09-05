const express = require('express');
const categoryRouter= express.Router();
const categoryController = require('../controller/categroyController');


categoryRouter.post('/createCategory', categoryController.createCategory);

categoryRouter.get('/getAllCategory', categoryController.getAllCategory);

categoryRouter.get('/getCategory/:id', categoryController.getCategory);

categoryRouter.delete('/deleteCategory/:id', categoryController.deleteCategory);

categoryRouter.put('/updateCategory/:id', categoryController.editCaegory)

module.exports = categoryRouter;