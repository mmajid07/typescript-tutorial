// const person: {
//   name: string;
//   age: number;
//   address: string;
//   designation: undefined | string;
// } = {
//   name: "Majid",
//   age: 25,
//   address: "DGK",
//   designation: undefined,
// };

// person.designation = "React JS Developer";

const person: {
  [key: string]: string | boolean | number | undefined | null;
} = {
  name: "Majid",
  age: 25,
  address: "DGK",
};
person.designation = "React JS Developer";
console.log(person.designation);
