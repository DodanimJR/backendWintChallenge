const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller');

userRouter.put("/update/:id", userController.selfUserUpdate);

module.exports = userRouter;