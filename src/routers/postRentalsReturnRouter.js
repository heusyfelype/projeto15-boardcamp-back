


import { Router } from "express";

import { postRentalsReturnController } from "../crontrollers/postRentalsReturnController.js";
//import { validRentalReturn } from "../middlewares/validRentalReturn.js";

const postRentalsReturnRouter = Router()

postRentalsReturnRouter.post('/rentals/:id/return', postRentalsReturnController);

export default postRentalsReturnRouter;
