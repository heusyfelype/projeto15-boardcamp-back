import { Router } from "express";

import { postRentalsController } from "../crontrollers/postRentalsController.js";
import { validRental } from "../middlewares/validRental.js";

const postRentalsRouter = Router()

postRentalsRouter.post('/rentals', validRental, postRentalsController);

export default postRentalsRouter;
