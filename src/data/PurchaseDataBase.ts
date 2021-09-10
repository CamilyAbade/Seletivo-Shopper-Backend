import moment from "moment";
import { NotFoundError } from "../error/NotFoundError";
import { productOutputDTO } from "../model/Product";
import { Purchase, purchaseOutputDTO } from "../model/purchase";
import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDataBase extends BaseDatabase {

  private static TABLE_NAME = "purchase"

  public async createPurchase(buy: Purchase): Promise<void> {
    try {
      await this.getConnection()
      .raw(
          `
          INSERT INTO purchase
          VALUES(
          '${buy.getId()}',
          '${buy.getName()}',
          JSON_OBJECT(${buy.getList()}),
          '${buy.getDate()}'
          );    
          `
        )
    }

    catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getPurchase(): Promise<purchaseOutputDTO[]> {
    const purchases = await this.getConnection()
      .select("*")
      .from(PurchaseDataBase.TABLE_NAME)

    if (!purchases) {
      throw new NotFoundError(`Products not found`)
    }

    return purchases.map( (purchase: any) =>{
      return{
      id: purchase.id,
      name: purchase.name,
      list: purchase.list,
      date: purchase.date.toLocaleString()
      }
    } )
  }

}


