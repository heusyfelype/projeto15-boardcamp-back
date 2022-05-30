import { Router } from "express";

import {getRentalsController} from '../crontrollers/getRentalsController.js';

const getRentalsRouter = Router();

getRentalsRouter.get('/rentals', getRentalsController);

export default getRentalsRouter;