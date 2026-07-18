// //arrays

// const myarr1=[2,4,6,8,10]
// // const heroes=["spider man","iron man"]
// const myarr2=new Array(1,2,3,4)

// console.log(myarr1)
// console.log(heroes[1]);

// heroes.push("captain america")

// console.log(heroes);

// console.log(myarr2.pop());

// heroes.unshift("captain marvel")

// console.log(heroes);
// console.log(myarr2.shift());

// const newarr2= myarr2.join();
// console.log(typeof myarr2)
// console.log(typeof newarr2)


const myArr = [0, 1, 2, 3, 4, 5];

console.log("A", myArr);

// slice(start, end) -> end is NOT included
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);

// splice(start, deleteCount)
const myn2 = myArr.splice(1, 3);

console.log("C", myArr);
console.log(myn2);


