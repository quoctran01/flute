const Joi = require('joi');

const productValidate = (data) => {
    const schema = Joi.object({
        productCode: Joi.string().min(4).required(),  
    })
    return schema.validate(data);
}
module.exports.productValidate = productValidate;