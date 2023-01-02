const joi = require('joi');

const projectModel = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    userId: joi.number().required(),
});

module.exports = {
    projectModel
}