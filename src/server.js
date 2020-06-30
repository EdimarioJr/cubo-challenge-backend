import express from "express";
import cors from "cors";
import routes from "./routes";
import connectMongo from './db/config/connection'
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

connectMongo()

app.listen(process.env.PORT || 3000);
