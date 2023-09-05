// joi.string().length(10).pattern(/^[0-9]+$/).required()

const Joi = require('joi');

const discountValidate = (data) => {
    const schema = Joi.object({
        percentDiscount: Joi.number().required()
    })
    return schema.validate(data);
}
module.exports.discountValidate = discountValidate;