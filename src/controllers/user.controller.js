const {request, response} = require('express');
const userService = require('../services/user.service');
const tokenAuth = require('../middlewares/tokenAuth');
const userModels = require('../models/users.model');
const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

function getAccessTokenFromHeader(req){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    return token;
}

class UserController {
    selfUserEdit = async (req, res) => {
        
        if(req.user){
            try {
                const {id} = req.params;
                const data = req.body;
                const validate = userModels.userSelfUpdateModel.validate(data);
                const user = await userService.updateUser(parseInt(id),validate.value);
                res.json({message: `Updated user ${user.name}`});
            } catch (error) {
                //console.log(error);
                res.status(500).json({message: error});
            }
            
        }
        
    };
    adminUserEdit = async (req, res) => {
        try {
            const token = getAccessTokenFromHeader(req);
            const {SECRET_KEY} = process.env;
            const verify = promisify(jwt.verify).bind(jwt);
            const payload = await verify(token, SECRET_KEY);
            const role = payload.role;
            console.log(role);
            if(role== 'ADMIN'){
                const {id} = req.params;
                const data = req.body;
                const validate = userModels.userAdminUpdateModel.validate(data);
                const user = await userService.updateUser(parseInt(id),validate.value);
                res.json({message: `Updated user ${user.name}`});
            }else{
                throw new Error("You are not authorized to access this route")
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({message: error.message});
            
            
        }

    }
    //Validate role from token, to make sure only admin can access this route

}

module.exports = new UserController();
