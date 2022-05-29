import { Router } from "express";

import {getCategoriesController} from '../crontrollers/getCategoriesController.js';

const getCategoriesRoute = Router();

getCategoriesRoute.get('/categories', getCategoriesController);

export default getCategoriesRoute;