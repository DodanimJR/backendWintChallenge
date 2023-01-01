const joi = require('joi');

const registerUserModel = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(30).required(),
    name: joi.string().min(3).max(30).required(),
    lastname: joi.string().min(3).max(30).required(),});

const loginUserModel = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(30).required(),});

    
module.exports = {
    registerUserModel,
    loginUserModel,
};