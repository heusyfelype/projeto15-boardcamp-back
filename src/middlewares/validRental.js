import validRentalsSchema from "./schemas/validRentalsSchema.js";

export function validRental (req, res, next) {
    const rental = req.body;
    const isValidRental = validRentalsSchema.validate(rental, { abortEarly: false });
    
    if (isValidRental.error) {
        return res.sendStatus(400);
    }
    next();
}