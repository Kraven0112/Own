const numbers = [2,3,4,5,6,2,3,4,5,6]

 const resultUnique = numbers.reduce((acc,current)=>{
if(!acc.includes(current))
    {
        acc.push(current)
    }
    return acc
},[])
console.log(resultUnique)


const result1 = [...new Set(numbers)]
console.log(result1)


const result2 = new Set(numbers)
console.log(result2)