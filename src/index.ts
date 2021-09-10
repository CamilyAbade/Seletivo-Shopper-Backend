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


const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });