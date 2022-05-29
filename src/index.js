import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";
//import connection from "./postgresConnect.js"


import getCategoriesRoute from './routers/getCategoriesRoute.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(json());


app.use(getCategoriesRoute)





const PORT = process.env.PORT
app.listen(PORT)

