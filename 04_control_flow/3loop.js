const coding=["js","ruby","c++","ptyhon3","r","htmlcss"]

coding.forEach(function(x){
    console.log(x);
    
} );

coding.forEach((item,index,arr)=> {
    console.log(item,index,arr);
    
    
});


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    // console.log(item.languageFileName);
    console.log(item.languageName);
    
    
    
});