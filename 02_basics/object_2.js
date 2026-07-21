const tinder= {}
tinder.name="rahul",
tinder.age=21,
tinder.verify=true

//console.log(tinder);

const nestobj= {
    email:"archithfuhhi/h@gmail.com",
    name1:{
        userfullname:{
            firstname:"archit",
            lastname:"chaudhary"
        }
    }
}
// console.log(nestobj.name1.userfullname.firstname);



const basicInfo = {
    name: "Archit",
    age: 21
};

const contactInfo = {
    email: "archit@gmail.com",
    phone: "9876543210"
};

const addressInfo = {
    city: "Chandigarh",
    state: "Punjab"
};

const user = Object.assign({}, basicInfo, contactInfo, addressInfo);
console.log(user);
console.log(Object.entries(user));



console.log("using spread");

const user2={...basicInfo,...contactInfo,...addressInfo}
console.log(user2);


console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(tinder.hasOwnProperty('islogger')) // return whether such key exists in the object or not 




