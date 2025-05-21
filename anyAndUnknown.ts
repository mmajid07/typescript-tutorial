var value: any = "Majid";

value = 30;
value = true;
value = "affan";

console.log(value.toUpperCase());
console.log(typeof value);

var value1: unknown = "Majid";

value1 = 30;
value1 = true;
value1 = "affan";
if (typeof value1 == "string") {
  console.log(value1.toUpperCase());
}
console.log(typeof value1);
