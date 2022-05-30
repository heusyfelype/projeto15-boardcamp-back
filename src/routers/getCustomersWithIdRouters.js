import { Router } from "express";

import {getCustomersWithIdController} from '../crontrollers/getCustomersWithIdController.js';


const getCustomersWithIdRouters = Router();

getCustomersWithIdRouters.get('/customers/:id', getCustomersWithIdController);

export default getCustomersWithIdRouters;




