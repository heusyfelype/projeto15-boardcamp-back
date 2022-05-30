import { Router } from "express";

import {getCustomersController} from '../crontrollers/getCustomersController.js';


const getCustomersRouters = Router();

getCustomersRouters.get('/customers', getCustomersController);

export default getCustomersRouters;