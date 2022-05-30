
import postGamesSchema from "./schemas/postGamesSchema.js";

export function validPostGames (req, res, next) {
    const game = req.body;
    const isValidGame = postGamesSchema.validate(game, { abortEarly: false });
    
    if (isValidGame.error) {
        return res.sendStatus(400);
    }
    next();
}