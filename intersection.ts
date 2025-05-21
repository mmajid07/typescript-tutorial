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

var persondata: addres = { name: "Majid", age: 25, address: "DGK" };

console.log(persondata);
