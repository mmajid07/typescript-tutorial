var str1: string = "Majid";
var str2: string = "Majid";
var str3: string = `Majid`;

var num: number = 30;

// var convertedString: string = num.toString();
var convertedString: string = "" + num + `My Lucky Number is ${num}`;

console.log(convertedString);

var male: Boolean = true;
var boolConverted: string = " " + male;
var boolConverted1: string = male.toString();
console.log(boolConverted, boolConverted1);
