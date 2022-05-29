
import postCategorySchema from "./schemas/postCategorySchema.js";

export function validPostCategory (req, res, next) {
    const category = req.body;
    const isValidCategory = postCategorySchema.validate(category, { abortEarly: false });
    
    if (isValidCategory.error) {
        return res.sendStatus(400);
    }
    next();
}