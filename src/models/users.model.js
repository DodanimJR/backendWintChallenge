const joi   = require('joi');

const userSelfUpdateModel = joi.object({
    email: joi.string().email().optional(),
    password: joi.string().min(6).max(30).optional(),
    name: joi.string().min(3).max(30).optional(),
    lastname: joi.string().min(3).max(30).optional(),
});

const userAdminUpdateModel = joi.object({
    email: joi.string().email().optional(),
    password: joi.string().min(6).max(30).optional(),
    name: joi.string().min(3).max(30).optional(),
    lastname: joi.string().min(3).max(30).optional(),
    role: joi.string().valid('ADMIN', 'CLIENT').optional(),
    membership: joi.string().valid('FREE', 'PREMIUM').optional(),
});

userAdminCreateModel = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(30).required(),
    name: joi.string().min(3).max(30).required(),
    lastname: joi.string().min(3).max(30).required(),
    role: joi.string().valid('ADMIN', 'CLIENT').required(),
});

module.exports = {
    userSelfUpdateModel,
    userAdminUpdateModel,
    userAdminCreateModel
}