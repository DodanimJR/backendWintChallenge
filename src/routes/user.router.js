const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller');
userRouter.get("/", userController.selfUserEdit);

module.exports = userRouter;