var { expressjwt: jwt } = require("express-jwt");
const express = require('express');
const authMiddleware = require('../middlewares/tokenAuth');
const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const adminUserRouter = require('./adminUser.router');
const projectRouter = require('./project.router');

const router = express.Router();
router.use(express.json());
router.use('/auth', authRouter);
router.use('/project',authMiddleware,projectRouter);
router.use('/admin',authMiddleware,adminUserRouter);
router.use('/user',authMiddleware,userRouter);


router.use('/',()=>{console.log('Hello World')});

module.exports=router;