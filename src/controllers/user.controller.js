const {request, response} = require('express');
const userService = require('../services/user.service');
const tokenAuth = require('../middlewares/tokenAuth');
//const userModels = require('../models/userModels.model');

class UserController {
    selfUserEdit = async (req, res) => {
        console.log(req.headers);
        res.json({message: 'Hello World'});
    };


}

module.exports = new UserController();
