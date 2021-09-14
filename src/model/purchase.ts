export class Purchase{
    constructor(
        private id: string,
        private name: string,
        private date: string,
        private list: JSON
    ){}


    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getDate(): string {
        return this.date
    }

    public getList(): JSON {
        return this.list
    }

    public setId(id: string) {
        this.id = id
    }

    public setName(name: string) {
        this.name = name
    }

    public setDate(date: string) {
        this.date = date
    }

    public setList(list: JSON) {
        this.list = list
    }

    public static toPurchase(data?: any): Purchase | undefined{
        return(data && new Purchase(
            data.id,
            data.name,
            data.date,
            data.list
        ))
    }
}

export interface purchaseOutputDTO{
    name: string,
    date: string,
    list: JSON
}

export interface purchaseInputDTO{
    id?: string,
    name: string,
    date: string,
    list: JSON
}
