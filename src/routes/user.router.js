const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller');

userRouter.put('/a/edit/:id', userController.adminUserEdit);
userRouter.put("/:id", userController.selfUserEdit);

module.exports = userRouter;