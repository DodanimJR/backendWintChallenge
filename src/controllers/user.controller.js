const {request, response} = require('express');
const userService = require('../services/user.service');
const tokenAuth = require('../middlewares/tokenAuth');
const userModels = require('../models/users.model');
function getAccessTokenFromHeader(req){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    return token;
}

class UserController {
    selfUserEdit = async (req, res) => {
        const token = getAccessTokenFromHeader(req);
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
    //Validate role from token, to make sure only admin can access this route

}

module.exports = new UserController();
