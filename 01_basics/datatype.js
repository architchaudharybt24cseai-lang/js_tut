"use strict";

let name = "archit";
let age = 21;
let verify = true;

console.table({
  name,
  age,
  verify
});

console.log(typeof "21"); // string
console.log(typeof 21);   // number
console.log(typeof verify); // boolean
console.log(typeof null);
console.log(typeof undefined);


let newage=33
console.log(typeof age);

let newage2="22abc"
console.log(typeof newage2) // type of mei agr newage ki value null hoti then ans 0, agr value undefined hoti toh NaN not a number
console.log(newage2)


let checkconversion=Number(newage2)
console.log(typeof checkconversion)
console.log(checkconversion)


let newnum=33
console.log(newnum)
console.log(typeof newnum)

let changednn=String(newnum)
console.log(changednn)
console.log(typeof changednn)