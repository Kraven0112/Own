//arguments object is available in regular function but not in arrow function

function data()
{
    console.log(arguments)
}

data(["Apple","Ball","Cat","Dog","Parrot","Cow","Buffalo"])
data({
    name:"Sushil",
    age:20,
    country:"Nepal",
    city:"Mahendranagar"
})

console.log("--------------------")
console.log("--------------------")

//Addition using arguments object in for loop
function add()
{
    let sum=0
    for(let i = 0; i<arguments.length;i++)
        {
            sum = sum + arguments[i]
        }
        return sum
}
const result = add(12,12)
console.log(result)

console.log("--------------------")
console.log("--------------------")

//Addition of arguments using for_in loop --- takes index 
function add1()
{
    let sum = 0
    for(const num in arguments)
        {
            sum = sum + arguments[num]
        }
        console.log(sum)
}

add1(12,12)

console.log("--------------------")
console.log("--------------------")



//Addition of arguments using for_of loop --- direct takes num
function add2()
{
    let sum = 0
    for(const num of arguments)
        {
            sum = sum + num
        }
        console.log(sum)
}
add2(13,13)



