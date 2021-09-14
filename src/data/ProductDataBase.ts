import { NotFoundError } from "../error/NotFoundError";
import { productInputDTO,  productOutputDTO } from "../model/Product";
import { purchaseInputDTO } from "../model/purchase";
import { BaseDatabase } from "./BaseDatabase";

export class ProdutcDataBase extends BaseDatabase{
  
  private static TABLE_NAME = "products"

  async VerifyId(id: string | productInputDTO) {
    return this.getConnection().select("*").where({ id }).from(ProdutcDataBase.TABLE_NAME);
  }


  public async getProducts(): Promise<productOutputDTO[]>{
    const product = await this.getConnection()
        .select("*")
        .from(ProdutcDataBase.TABLE_NAME)

        if(!product){
          throw new NotFoundError(`Products not found`)
        }

        return product.map( (items: any) =>{
          return{
          id: items.id,
          name: items.name,
          price: items.price,
          qty_stock: items.qty_stock
          }
        } )
  }


}


