//usinf acc as an array
const numbers = [2,2,3,3,4,4,5,5,6,6]
const result =numbers.reduce((acc,current)=>{
    if(!acc.includes(current))
        {
            acc.push(current)
        }
        return acc
},[])
console.log(result)

//using new Set() method and spread operator
const uniqueElement = [...new Set(numbers)]
console.log(uniqueElement)

//using only new Set() method
const uniqueElement1 = new Set(numbers)
console.log(uniqueElement1)