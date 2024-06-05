//filter is a array method
//this is an array having object in it
const fruit=[
    {name:"Apple",quantity:"10kg",pricePerKg:150,totalAmt:1500},
    {name:"Orange",quantity:"5kg",pricePerKg:100,totalAmt:500},
    {name:"Grape",quantity:"10kg",pricePerKg:180,totalAmt:1800}
]
function get(fruit)
{
    return fruit.totalAmt < 600
}
const result1 = fruit.filter(get)

console.log(result1)

console.log("------------------------")


const numbers = [12,12,13,14,22,0,1,3,4,2,9,8,10,]

function getNum(numbers)
{
    return numbers <= 10
}

const  result2 = numbers.filter(getNum)
console.log(result2)


console.log("-----------------------")



function getName()
{
    const name = ["Sushil","Saliram","Dinesh","Preeti","Milan","Sabin"]
    const data = name.filter((letter) => letter.length <6)
    console.log(data)
}
getName()

