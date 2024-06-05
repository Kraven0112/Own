//find method is for array 

const fruit=[
    {name:"Apple",quantity:"10kg",pricePerKg:150,totalAmt:1500},
    {name:"Orange",quantity:"5kg",pricePerKg:100,totalAmt:500},
    {name:"Grape",quantity:"10kg",pricePerKg:180,totalAmt:1800}
]

function get(fruit)
{
    return fruit.pricePerKg < 200
}
const result1 = fruit.find(get)
console.log(result1)

console.log("-----------------------")
console.log("-----------------------")


const numbers = [1,3,2,4,11,12,100,]
function getNum(numbers)
{
    return numbers < 5
}
const result2 = numbers.find(getNum)
console.log(result2) //output will be 1


console.log("-----------------------")
console.log("-----------------------")


function getName()
{
    const name = ["Sushil","Saliram","Dinesh","Preeti","Milan","Sabin"]

    const data = name.find((word) => word.length < 6)
    console.log(data) //output will be Milan
   
}
getName()