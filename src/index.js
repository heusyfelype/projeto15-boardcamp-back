import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";
import {postgresConnection} from "./postgresConnect.js"


import testRouter from './routers/testRouter.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(json());


app.use(testRouter)





const PORT = process.env.PORT
app.listen(PORT, () =>{
    postgresConnection();
    console.log("Boardcamp server is Running!")
})

