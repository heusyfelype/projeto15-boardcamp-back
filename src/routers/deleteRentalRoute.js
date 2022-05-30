import { Router } from "express";

import {deleteRentalController} from '../crontrollers/deleteRentalController.js';

const deleteRentalRoute = Router();

deleteRentalRoute.delete('/rentals/:id', deleteRentalController);

export default deleteRentalRoute;