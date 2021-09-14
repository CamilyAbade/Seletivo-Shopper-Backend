import { Request, Response } from "express";
import { StockBusiness } from "../business/StockBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { StockDataBase } from "../data/StockDataBase";
import { productInputDTO } from "../model/Product";

export class StockController{
    async putStock (req: Request, res: Response): Promise<void>{

        try{
            const input: productInputDTO = {
                id: req.body.id,
                qty_stock: req.body.qty_stock
            }

        const stockBusiness = new StockBusiness (
            new StockDataBase,
        )  
        await stockBusiness.changeStock(input)
        res.status(200).send('Banco alterado com sucesso!')

        }
        catch(error){
            res.status(error.customErrorCode || 400).send({message: error.message})
        }
        finally { BaseDatabase.destroyConnection}
    }

   
}