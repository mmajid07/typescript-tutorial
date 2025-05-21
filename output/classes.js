"use strict";
class Product {
    name;
    price;
    pId;
    inCard;
    isOrdered;
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
        this.inCard = false;
        this.isOrdered = false;
    }
    AddtoCard() {
        this.inCard = true;
    }
    OrderedProduct() {
        if (this.inCard) {
            return `Product name is ${this.name} Ordered Now`;
        }
        else {
            return "No Product Found!";
        }
    }
}
var objProduct = new Product("Mobile", 50000, 3);
var objProduct1 = new Product("Computer", 100000, 5);
// objProduct.AddtoCard();
// objProduct1.AddtoCard();
// console.log(objProduct.OrderedProduct());
// console.log(objProduct1.OrderedProduct());
class Ordered extends Product {
    constructor() {
        super("Mouse", 5000, 200);
    }
    GetName() {
        return this.name;
    }
}
class SubOrdered extends Ordered {
    ShowValue() {
        return `Product name is  ${this.name}`;
    }
}
var subOrdered = new SubOrdered();
console.log(subOrdered.ShowValue());
