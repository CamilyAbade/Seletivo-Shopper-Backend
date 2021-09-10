import express from "express";
import { PurchaseController } from "../controller/PurchaseController";


export const purchaseRouter = express.Router();

const purchaseController = new PurchaseController();

purchaseRouter.get("/getBuy", purchaseController.getPurchase);
purchaseRouter.post("/postBuy", purchaseController.postPurchase);
