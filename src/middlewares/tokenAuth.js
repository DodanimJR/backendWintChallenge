const jwt = require('jsonwebtoken');
const {NextFunction, Request, Response} = require('express');
const userService = require('../services/user.service');
const createError = require('http-errors');
const {promisify} = require('util');


    function getAccessTokenFromHeader(req){
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        return token;
    }
    const authMiddleware = async (req, res, next)=>{
        try {
            const {SECRET_KEY} = process.env;
            const token = getAccessTokenFromHeader(req);
            const verify = promisify(jwt.verify).bind(jwt);
            const payload = await verify(token, SECRET_KEY);
            if(!req.user){
                const user = await userService.findUserByEmail(payload.email);
                if(!user){
                    throw new createError(404, 'User not found');
                }
                req.user = user;
            }
            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({message: 'Unauthorized'});
        }

    }


module.exports = authMiddleware;