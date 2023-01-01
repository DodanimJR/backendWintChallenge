const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller');


userRouter.delete('/delete/:id', userController.adminUserRemove);
userRouter.post('/create', userController.adminUserCreate);
userRouter.put('/update/:id', userController.adminUserUpdate);

module.exports = userRouter;
