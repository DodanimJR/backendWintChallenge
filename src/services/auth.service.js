const client = require('../database/client')
const userService = require('./user.service')
const {compareSYNC, hashSYNC, genSaltSync} = require('bcrypt')
const jwt = require('jsonwebtoken')

class authService {

    hashPassword(password) {
        const salt = genSaltSync(10);
        return hashSYNC(password, salt);
    }
    validatePassword(password, hash) {
        return compareSYNC(password, hash);
    }
    
    async register(data) {

        try {
            const {password, ...rest} = data;
            const user = userService.createUser(rest);
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = new authService();

