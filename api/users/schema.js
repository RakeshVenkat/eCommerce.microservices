const Joi = require('joi')
const schemas = { 
        getUserSchema : Joi.object().keys({
            id: Joi.string().required()
        })
}
module.exports = schemas;