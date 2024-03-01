import "reflect-metadata";
import express from "express";
import dotevn from "dotenv";
import categoryRouter  from "./routes/category.route";
import { myDataSource } from "./database/app-data-source";
import * as bodyParser from "body-parser";
import { DATA_SOURCE_MESSAGES } from "./constants/messages";
import productRouter from "./routes/product.route";

dotevn.config();

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT;

myDataSource
    .initialize()
    .then(() => {
        console.log(DATA_SOURCE_MESSAGES.INITIALIZING_DATA_SOURCE_SUSCESS);
    }).catch((err) => {
        console.error(DATA_SOURCE_MESSAGES.INITIALIZING_DATA_SOURCE_ERROR, err);
    });

app.use("/api/category", categoryRouter );
app.use("/api/products", productRouter );

app.listen(PORT, () => {
    console.log(DATA_SOURCE_MESSAGES.SERVER_RUNNING_PORT, PORT);
});