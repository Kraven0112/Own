const fruits = ["Apple", "Banana", "Orange", "Dates", "Guava"]

const result = fruits.filter((fruit) => {
  return fruit.length > 5
})
console.log(result)



const numbers = [12, 10, 7, 4, 3, 5, 6, 9, 7, 8, 4, 3]

const result1 = numbers.filter((number) => {
  return number < 7
})
console.log(result1)
