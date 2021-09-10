import moment from "moment";
import { PurchaseDataBase } from "../data/PurchaseDataBase";
import { InvalidInputError } from "../error/InvalidInput";
import { Purchase, purchaseInputDTO, purchaseOutputDTO } from "../model/purchase";
import { IdGenerator } from "../services/IdGenerator";

export class PurchaseBusiness{
    
    constructor(
        private purchaseDataBase: PurchaseDataBase,
        private idGenerator: IdGenerator
    ){}

    async registerPurchase(input: purchaseInputDTO){
        
        if(!input.name || !input.date || !input.list){
            throw new InvalidInputError("Invalid input to registerPurchase")
        }

        if (input.date){
            input.date  = input.date.split('/').reverse().join('/')            
        }

        await this.purchaseDataBase.createPurchase(
            Purchase.toPurchase({
                ...input,
                id: this.idGenerator.generate()
            })!
            )
    }

    async getPurchase(): Promise<purchaseOutputDTO[]>{
        return this.purchaseDataBase.getPurchase()
    }



}