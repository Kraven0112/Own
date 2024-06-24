//using reduce method for unique elements
const numbers = [2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

const result = numbers.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current)
  }
  return acc
}, [])
console.log(result)

//Using new Set() for unique numbers from array
const uniqueNum = new Set(numbers)
console.log(uniqueNum)

//Usimg spread operator and new Set() method
const uniqueNum1 = [...new Set(numbers)]
console.log(uniqueNum1)


const fruits = ["Apple","Apple","Orange","Orange","Banana","Banana"]

const fruitResult = fruits.reduce((acc,current)=>{
    if(!acc.includes(current))
        {
            acc.push(current)
        }
        return acc
},[])
console.log(fruitResult)

//using new Set() method for unique elements from array
const uniqueFruit = new Set(fruits)
console.log(uniqueFruit)

//using spread operator and new Set() method
const uniqueFruit1 = [...new Set(fruits)]
console.log(uniqueFruit1)