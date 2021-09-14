import express from "express";
import { PurchaseController } from "../controller/PurchaseController";


export const purchaseRouter = express.Router();

const purchaseController = new PurchaseController();

purchaseRouter.get("/get-purchases", purchaseController.getPurchase);
purchaseRouter.post("/post-purchase", purchaseController.postPurchase);
