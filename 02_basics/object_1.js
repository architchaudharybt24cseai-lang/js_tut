//object literals

// WHY SECOND ACCESS METHOD IMP , UNDERSTANDING VI SYMBOL 
const mysym=Symbol("key1")

const myobj={
    name:"archit",
   // mysym:"this is  shit",// this works as astring rather than a symbol(unique value nhi h).  
                          // use square brackets then it is used as a  symbol
    [mysym]:"keyyyyyy",                
    age:18,
    address:"pkl"

}
console.log(myobj.age)
//console.log(myobj[name]) this line gives error because you can't access the var as such : NAME IS KEPT AS A STRING , ACCESS IT TOO AS A STRING

console.log(myobj["name"])

console.log(myobj[mysym])
console.log( typeof mysym)


//edit
myobj.age=21,
console.log(myobj.age);


//    Object.freeze(myobj)
//myobj.age=29
//console.log(myobj)



myobj.greeting = function () {
  console.log(`hello there ${this.name}`);// refers to the same object 
};


console.log(myobj.greeting); // function anonymous // function returnback // function ka srf reference output aata h

console.log(myobj.greeting());// gives correct output 






