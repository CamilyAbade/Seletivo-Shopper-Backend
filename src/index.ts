import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { productRouter } from "./routes/productRouter";
import { purchaseRouter } from "./routes/purchaseRouter";
import { stockRouter } from "./routes/stockRouter";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/list", productRouter)
app.use("/buy", purchaseRouter)
app.use("/stock", stockRouter)


  const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});