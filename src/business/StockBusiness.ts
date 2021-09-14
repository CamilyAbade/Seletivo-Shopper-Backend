import { ProdutcDataBase } from "../data/ProductDataBase";
import { StockDataBase } from "../data/StockDataBase";
import { InvalidInputError } from "../error/InvalidInput";
import { productInputDTO } from "../model/Product";

export class StockBusiness{
    constructor(
        private stockDataBase: StockDataBase,
    ){}

    async changeStock(input: productInputDTO){
        if(!input.id || !input.qty_stock){
            throw new InvalidInputError("Invalid input to change stock")
        }
        
        const productDataBase = new ProdutcDataBase()
        const queryId = await productDataBase.VerifyId(input.id)
        if (!queryId[0]) {
        throw new Error("Invalid id");
        }

        const queryStock = await productDataBase.VerifyStock(input)
        if (!queryStock[0]) {
        throw new Error("Invalid qty");
        }



        await this.stockDataBase.changeStock(input)

    }
        
        

}