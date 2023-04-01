import Express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import DefaultData from "./default.js";
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from "body-parser";
import { v4 as uuid } from 'uuid';

const app = Express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const PORT = process.env.PORT || 8080;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = process.env.URI || `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-web.rewnl2a.mongodb.net/?retryWrites=true&w=majority`;

Connection(URL);

app.listen(PORT, () => console.log(`server is running sucessfully on PORT ${PORT}`));
DefaultData();







