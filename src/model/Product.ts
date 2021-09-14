export class Product{
    constructor(
        private id: string,
        private name: string,
        private price: string,
        private qty_stock: string
    ){}


    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getPrice(): string {
        return this.price
    }

    public getQtyStock():string {
        return  this.qty_stock
    }

    public setName(name: string) {
        this.name = name
    }

    public setPrice(price: string) {
        this.price = price
    }

    public setQtyStock(qty_stock: string) {
        this.qty_stock = qty_stock
    }

    public static toProduct(data?: any): Product | undefined{
        return(data && new Product(
            data.id,
            data.name,
            data.price,
            data.qty_stock
        ))
    }

}

export interface productInputDTO{
    id: string,
    qty_stock: number
}

export interface productOutputDTO{
    name: string,
    price: string,
    qty_stock: number
}

