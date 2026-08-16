const user = {
    username: "archit",
    price: 999,

    welcomemsg: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
};

user.welcomemsg();

user.username = "vishal";

user.welcomemsg();
console.log(this);



const newfun= ()=>{
    let username="archit"
    //console.log(this.username);// error
    console.log(username);
    

}
newfun()


//explicit return ismei returnkeyword likha
// const summ=(num1,num2)=> {
    // return num1+num2
//}

//console.log(summ(4,5));

//implicit return , no need of return keyword and curly braces 
// curly braces= return () or nothing no return
const summ=(num1,num2)=> num1+num2

const aisehi=()=> ({username:"archit"})


console.log(aisehi());



console.log(summ(4,5));



