const Joi = require('joi');

const registerValidate = (data) => {
    const schema = Joi.object({
        userName: Joi.string().min(4).required(),
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(6).required(),
    })
    return schema.validate(data)
}

module.exports.registerValidate = registerValidate;