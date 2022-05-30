import Joi from 'joi';

const postGamesSchema = Joi.object({
	"name": Joi.string().required(),
    "image": Joi.string().required(), //colocar como url
    "stockTotal": Joi.number().positive().required(),
    "categoryId": Joi.number().required(),
    "pricePerDay": Joi.number().positive().required()
});

export default postGamesSchema;