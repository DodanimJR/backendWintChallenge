var { expressjwt: jwt } = require("express-jwt");
const express = require('express');
const authRouter = require('./auth.router');

const router = express.Router();
router.use(express.json());

router.use('/auth', authRouter);
router.use('/',()=>{console.log('Hello World')});







module.exports=router;