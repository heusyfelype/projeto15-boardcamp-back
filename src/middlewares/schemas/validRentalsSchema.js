import Joi from 'joi';

const validRentalsSchema = Joi.object({
	"customerId": Joi.number().required(),
    "gameId": Joi.number().required(), 
    "daysRented": Joi.number().positive().required()
});

export default validRentalsSchema;