import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";
//import connection from "./postgresConnect.js"


import getCategoriesRoute from './routers/getCategoriesRoute.js';
import postCategoriesController from './routers/postCategoriesRouter.js';
import getGamesRouter from './routers/getGamesRouter.js';
import postGamesRouter from './routers/postGamesRouter.js';
import postCustomersRouter from './routers/postCustomersRouter.js';
import putCustomersRouter from './routers/putCustomersRouter.js';
import getCustomersWithIdRouters from './routers/getCustomersWithIdRouters.js';
import getCustomersRouters from './routers/getCustomersRouter.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(json());


app.use(getCategoriesRoute);
app.use(postCategoriesController);
app.use(getGamesRouter);
app.use(postGamesRouter);
app.use(postCustomersRouter);
app.use(putCustomersRouter);
app.use(getCustomersWithIdRouters);
app.use(getCustomersRouters);




const PORT = process.env.PORT;
app.listen(PORT);

