import { Router } from "express";

import { postCustomersController } from "../crontrollers/postCustomersController.js";
import { validPostCustomer } from "../middlewares/validPostCustomer.js";


const postCustomersRouter = Router();

postCustomersRouter.post('/customers', validPostCustomer, postCustomersController);

export default postCustomersRouter;