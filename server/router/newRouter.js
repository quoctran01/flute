const express = require('express');
const newRouter = express.Router();
const newController = require("../controller/newController")

newRouter.post('/createNew', newController.createNew)

newRouter.get('/allNews', newController.getAllNew)

newRouter.put('/editNew/:id', newController.editNew)

newRouter.delete('/deleteNew/:id', newController.deleteNew)

module.exports =  newRouter