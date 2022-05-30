import { Router } from "express";

import { postGamesController } from "../crontrollers/postGamesController.js";
import { validPostGames } from "../middlewares/validPostGame.js";

const postGamesRouter = Router();

postGamesRouter.post('/games', validPostGames, postGamesController);

export default postGamesRouter;