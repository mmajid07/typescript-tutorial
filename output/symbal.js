"use strict";
var sym1 = Symbol("abc");
var sym2 = Symbol("abc");
var dId = Symbol("id");
var obj = {
    [dId]: "100",
    name: "Majid",
};
console.log(obj[dId]);
