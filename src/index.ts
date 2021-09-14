import dotenv from "dotenv";
import express from "express";
import { productRouter } from "./routes/productRouter";
import { purchaseRouter } from "./routes/purchaseRouter";
import { stockRouter } from "./routes/stockRouter";
import cors from 'cors'

dotenv.config();

const app = express();

app.use(cors())

app.use(express.json());

app.use("/list", productRouter)
app.use("/purchase", purchaseRouter)
app.use("/stock", stockRouter)

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});

