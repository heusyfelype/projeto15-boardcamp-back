import { Router } from "express";

import { putCustomersController } from "../crontrollers/putCustomersController.js";
import { validPostCustomer } from "../middlewares/validPostCustomer.js";

const putCustomersRouter = Router();

putCustomersRouter.put('/customers/:id', validPostCustomer, putCustomersController);

export default putCustomersRouter;