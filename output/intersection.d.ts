interface personA {
    name: string;
}
interface personB {
    age: number;
}
type personC = personA & personB;
interface addres extends personC {
    address: string;
}
declare var persondata: addres;
