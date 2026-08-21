const myname=[1,2,3,4,5,5,6,7,7,8,999,89];
let newname= myname.map( ( item )=> item+10)
console.log(newname);


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
