//Array destructure in javascript
const fruits = ["Apple", "Orange", "Dates", "Banana", "Watermelon"]

//first way - destructure
const [a, b, ...c] = fruits
console.log(a)
console.log(b)
console.log(c)

//second way - destructure
const { 0: fruit1, 1: fruit2, 2: fruit3 } = fruits
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

//third way - destructure
const [, , , d] = fruits
console.log(d)



//Object  destructure in javascript
const user = {
  username: "Sushil",
  age: 21,
  country: "Nepal",
  city: "Mahendranagar",
  district: "Kanchanpur",
  address: {
    village: "Bhakunda",
    tole: "Sudarshanpur",
  },
}

//first way of destructure object -of single layer
const { username: x, age: y, ...z } = user
console.log(x)
console.log(y)
console.log(z)

//second way of destructure object - of multiple layer
const {
  address: { village: villageName },
  address: { tole: toleName },
} = user
console.log(villageName)
console.log(toleName)

//third way of destructure object
const {...rest} = user
console.log(rest)

