import { productInputDTO } from "../model/Product";
import { BaseDatabase } from "./BaseDatabase";

export class StockDataBase extends BaseDatabase {

  private static TABLE_NAME = "products"

  public async changeStock(newStock: productInputDTO): Promise<void> {

    try {
      await this.getConnection()
      .update({
        qty_stock: newStock.qty_stock
      })
      .where({id: newStock.id})
      .into(StockDataBase.TABLE_NAME)
    }

    catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}


