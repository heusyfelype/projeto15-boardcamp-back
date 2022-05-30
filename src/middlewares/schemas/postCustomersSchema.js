import Joi from 'joi';

const postCustomersSchema = Joi.object({
	"name": Joi.string().required(),
    "phone": Joi.string().pattern(/^[0-9]{10,11}$/).required(),
    "cpf": Joi.string().pattern(/^[0-9]{11}$/).required(),
    "birthday": Joi.string().pattern(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/).required()
});

export default postCustomersSchema;

  /*
        {
            name: 'João Alfredo',
            phone: '21998899222',
            cpf: '01234567890',
            birthday: '1992-10-05'
        }
    */
