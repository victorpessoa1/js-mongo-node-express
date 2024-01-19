import express from "express";
import mongoose from "mongoose";
import { router } from "./routes.js"
const app = express();

import { Person } from "./models/Person.js";

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());


app.use(router)

mongoose
    .connect(
        'mongodb+srv://josevitorppessoa:safepassword@js-node-express-mongodb.gogx56s.mongodb.net/'
    )
    .then(() => {
        console.log('Mongodb connection established');
        app.listen(3000)
    })

