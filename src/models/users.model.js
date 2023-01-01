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

module.exports = {
    userSelfUpdateModel,
    userAdminUpdateModel
}