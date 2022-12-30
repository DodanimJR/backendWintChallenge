const {request, response} = require('express');
const authService = require('../services/auth.service');
const authModels = require('../models/authModels.model');

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
            res.json(`Logged in User ${user.name}`);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'Something went wrong'});
            
        }
    }
}

const authController = new AuthController();

module.exports = authController;