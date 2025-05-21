var sym1: symbol = Symbol("abc");
var sym2: symbol = Symbol("abc");

var dId = Symbol("id");

var obj = {
  [dId]: "100",
  name: "Majid",
};
console.log(obj[dId]);
