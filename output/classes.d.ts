declare class Product {
    name: string;
    price: number;
    protected pId: number;
    inCard: boolean;
    isOrdered: boolean;
    constructor(name: string, price: number, pId: number);
    AddtoCard(): void;
    OrderedProduct(): string;
}
declare var objProduct: Product;
declare var objProduct1: Product;
declare class Ordered extends Product {
    constructor();
    GetName(): string;
}
declare class SubOrdered extends Ordered {
    ShowValue(): string;
}
declare var subOrdered: SubOrdered;
