const {request, response} = require('express');
const authService = require('../services/auth.service');
const authModels = require('../models/auth.model');
const { rest } = require('lodash');
const { object } = require('joi');

class AuthController {
    async register(req, res) {
        try {
            const data = req.body;
            const validate = authModels.registerUserModel.validate(data);
            const user = await authService.register(validate.value);
            res.json(`Created User ${user.name}`);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'Something went wrong'});
            
        }

    }
    async login(req, res) {
        try {
            const data = req.body;
            const validate = authModels.loginUserModel.validate(data);
            const user = await authService.login(validate.value);
            console.log(user.json);
        
            if(user.message=="Invalid password"){
                throw new Error("Invalid password");
                

            }else{
                res.json({accessToken: user});
            }
            
        } catch (error) {
            res.json({message: error.message});
            
        }
    }
}

const authController = new AuthController();

module.exports = authController;