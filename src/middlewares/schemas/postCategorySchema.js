import Joi from 'joi';

const postCategorySchema = Joi.object({
	"name": Joi.string().required()
});

export default postCategorySchema;