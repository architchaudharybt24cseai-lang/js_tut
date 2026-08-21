//FOR IN AND FOR OF
const greeting="hey archit how are you";
for( const i of greeting)
{
    console.log(`the char at this index is ${i}`);
    
}



const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const [key,value] of map)
{
console.log(key, 'is', value);
}

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject)
{
    console.log(`the ${key} is the shortcut for ${myObject[key]}`);
    
}