const arr1=[1,2,3,4,5,6,7,8,9]

const sumarr=arr1.reduce(function (acc,curr){
    return acc+curr
},0)

const sumarr2=arr1.reduce( (acc,curr)=>(
     acc+curr
),0)

console.log(sumarr2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);