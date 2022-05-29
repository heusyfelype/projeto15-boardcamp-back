import { Router } from "express";

import {postCategoriesController} from '../crontrollers/postCategoriesController.js';
import { validPostCategory } from "../middlewares/validPostCategory.js";

const postCategoriesRoute = Router();

postCategoriesRoute.post('/categories', validPostCategory, postCategoriesController);

export default postCategoriesRoute;