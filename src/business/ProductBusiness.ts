import { ProdutcDataBase } from "../data/ProductDataBase";
import { productOutputDTO } from "../model/Product";

export class ProductBusiness{
    
    constructor(
        private productDataBase: ProdutcDataBase,
    ){}

    async getProducts(): Promise<productOutputDTO[]>{
        return this.productDataBase.getProducts()
    }
}