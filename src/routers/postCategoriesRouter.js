import { Router } from "express";

import {postCategoriesController} from '../crontrollers/postCategoriesController.js';

const postCategoriesRoute = Router();

postCategoriesRoute.post('/categories', postCategoriesController);

export default postCategoriesRoute;