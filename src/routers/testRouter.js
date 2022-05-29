import { Router } from "express";

import {controllerTest} from '../crontrollers/controllerTest.js';

const testRouter = Router();

testRouter.get('/', controllerTest);

export default testRouter;