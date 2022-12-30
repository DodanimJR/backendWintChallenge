var { expressjwt: jwt } = require("express-jwt");
const express = require('express');
const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const budgetRouter = require('./budget.router');
const categoryRouter = require('./category.router');
const projectRouter = require('./project.router');
const transactionRouter = require('./transaction.router');





const router = express.Router();

router.use(express.json())





module.exports=router;