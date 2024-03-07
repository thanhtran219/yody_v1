import "reflect-metadata";
import express from "express";
import dotevn from "dotenv";
import "express-async-errors";
import * as bodyParser from "body-parser";
import { myDataSource } from "./database/app-data-source";
import { DATA_SOURCE_MESSAGES } from "./constants/messages";
import categoryRouter  from "./routes/category.route";
import productRouter from "./routes/product.route";
import { globalErrorHandler, notFoundErrorHandler } from "./middleware/error.handler";

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

app.all("*", notFoundErrorHandler);

app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(DATA_SOURCE_MESSAGES.SERVER_RUNNING_PORT, PORT);
});