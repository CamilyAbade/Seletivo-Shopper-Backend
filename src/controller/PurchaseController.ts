import { Request, Response } from "express";
import { OutputFileType } from "typescript";
import { ProductBusiness } from "../business/ProductBusiness";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { ProdutcDataBase } from "../data/ProductDataBase";
import { PurchaseDataBase } from "../data/PurchaseDataBase";
import { purchaseInputDTO, purchaseOutputDTO } from "../model/purchase";
import { IdGenerator } from "../services/IdGenerator";

export class PurchaseController{
    async postPurchase (req: Request, res: Response): Promise<void>{

        try{
            const input: purchaseInputDTO = {
                name: req.body.name,
                date: req.body.date,
                list: req.body.list
            }

        const purchaseBusiness = new PurchaseBusiness (
            new PurchaseDataBase,
            new IdGenerator
        )  
        await purchaseBusiness.registerPurchase(input)
        res.status(200).send('Compra criada com sucesso!')
        }

        catch(error){
            res.status(error.customErrorCode || 400).send({message: error.message})
        }
        finally { BaseDatabase.destroyConnection}
    }

    async getPurchase(req: Request, res: Response): Promise<void>{

        try{
            const purchaseBusiness = new PurchaseBusiness(
                new PurchaseDataBase,
                new IdGenerator
            )
            
            const purchase = await purchaseBusiness.getPurchase()
            res.status(200).send(purchase)
        }   

        catch(error){
            res.status(error.customErrorCode || 400).send({message: error.message})
        }
        finally { BaseDatabase.destroyConnection}

    }
}