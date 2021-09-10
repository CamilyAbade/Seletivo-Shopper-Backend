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
        
        await this.stockDataBase.changeStock(input)





    }
        
        

}