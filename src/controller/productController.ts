import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { ProdutcDataBase } from "../data/ProductDataBase";

export class ProductController{
    async getProducts (req: Request, res: Response): Promise<void>{

        try{
            const productBusiness = new ProductBusiness( new ProdutcDataBase)

            const product =  await productBusiness.getProducts()

            res.status(200).send(product)
        }

        catch(error){
            res.status(error.customErrorCode || 400).send({message: error.message})
        }
        finally { BaseDatabase.destroyConnection}
    }
}