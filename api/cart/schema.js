const Joi = require('joi')
export const schema = {
    create: {
        req: Joi.object().keys({
                products: Joi.array().items(
                    Joi.object().keys({
                        id: Joi.string().length(3).required(),
                        name: Joi.string().required(),
                        price: Joi.number()
                    }))
                }),
        res: Joi.object().keys({
            success: Joi.string(),
            error: Joi.string(),
            data: Joi.object().keys({id: Joi.string().required()})
        })
    }
}


