import postCustomersSchema from "./schemas/postCustomersSchema.js";

export function validPostCustomer (req, res, next) {
    const customer = req.body;
    const isValidCustomer = postCustomersSchema.validate(customer, { abortEarly: false });
    
    if (isValidCustomer.error) {
        return res.sendStatus(400);
    }
    next();
}