import { Router } from "express";

import {getGamesController} from '../crontrollers/getGamesController.js';

const getGamesRouter = Router();

getGamesRouter.get('/games', getGamesController);

export default getGamesRouter;