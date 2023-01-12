const joi = require('joi');

const projectModel = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    userId: joi.number().required(),
});

const projectUpdateModel = joi.object({
    name: joi.string(),
    description: joi.string(),
});
module.exports = {
    projectModel,
    projectUpdateModel
}