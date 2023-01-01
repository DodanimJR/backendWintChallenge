const client = require('../database/client')
const createError = require('http-errors')
const userService = require('./user.service')
const {compareSync, hashSync, genSaltSync} = require('bcrypt')
const jwt = require('jsonwebtoken');
const { any } = require('joi');

class authService {

    #hashPassword(password) {
        const salt = genSaltSync(10);
        return hashSync(password, salt);
    }
    #validatePassword(password, hash) {
        let result = compareSync(password, hash);
        return result;
    }
    #generateToken(User){
        const {EXPIRATION_TOKEN, SECRET_KEY}=process.env;
        return jwt.sign({id: User.id,
            email: User.email,
            role: User.role
        }, 
        SECRET_KEY, 
        {expiresIn: EXPIRATION_TOKEN});
        
    }
    
    async register(data) {

        try {
            const {password, ...rest} = data;
            const user = userService.createUser({
                password: this.#hashPassword(password), 
                ...rest});
            return user;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    async login(data) {
        try {
            
            const {email, password} = data;
            const user = await userService.findUserByEmail(email);
            if(!user || user == null){
                throw new createError(404, 'User not found')
            }
            
            if(!this.#validatePassword(password, user.password)){
                throw new createError(401, 'Invalid password')
            }
            const accessToken = this.#generateToken(user);
            return accessToken;

            
        } catch (error) {
            return error;
            
        }
    }
}


module.exports = new authService();

