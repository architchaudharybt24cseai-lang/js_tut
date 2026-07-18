// const marvel_heros = ["thor","Ironman" , "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]


// //mst chij , array can take another array as an element 

// // marvel_heros.push(dc_heros)
// // console.log(marvel_heros );


// // const allHeros = marvel_heros.concat(dc_heros)
// // console.log (allHeros);
// const lastarr=[...marvel_heros,...dc_heros]
// console.log(lastarr)

console.log(Array.isArray("hitesh"))
 
console.log(Array.from("hitesh"));

// very interesting case here the inner one is an object, let c how it treats it
console.log(Array.from({name : "hitesh"}));

let n1=100;
let n2=120;
let n3=130;
let n4=1440;
console.log(typeof n1);



console.log(Array.of(n1,n2,n3,n4,5));




