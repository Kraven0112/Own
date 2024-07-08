//using flat(depth),join() and from in array

const singleDimension =[1,2,3,4,5,6,7,8,9,10]
const doubleDimension =[1,2,3,4,[5,6,7,8]]
const threeDimension =[1,2,3,[4,5,6,[7,8,9]]]
const fourDimension =[1,2,[5,6,[7,8,[9,10]]]]

//using flat() in array
console.log(singleDimension.flat()) 
//output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(doubleDimension.flat())
//output: [1, 2, 3, 4, 5, 6, 7, 8]

console.log(threeDimension.flat(2))
//output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(fourDimension.flat(3))
//output: [1, 2, 5, 6, 7, 8, 9, 10]



//using join() mathod in array
console.log(singleDimension.join())
//output: 1,2,3,4,5,6,7,8,9,10
//creates new string 



//using from() method 
console.log(Array.from(doubleDimension))
//used to create new array from instance array or iterable object.


//using from in object or other data source
const myName = "Sushil"
console.log(Array.from(myName))
//output: ['S', 'u', 's', 'h', 'i', 'l']

const user = {
    firstName :"Sushil",
    lastName:"Chaudhary",
    age:21,
    country:"Nepal"
}

console.log(Object.entries(user))
//output: [Array(2), Array(2), Array(2), Array(2)]
//0:['firstName','Sushil']
//1:['lastName','Chaudhary']
//2:['age','21']
//3:['country','Nepal']

//using slice() ans splice() method in array
const evenNUm =[2,4,6,8,10,12,14,16,18,20]

console.log(evenNUm.slice(2,6))
//output:[6, 8, 10, 12]

console.log(evenNUm.slice(6,9))
//output: [14, 16, 18]

const userName = "Eliana Smith Johnson "
console.log(userName.length)
//output : 21

console.log(userName.slice(6,12))
//output :  Smith

console.log(userName.slice(5,17))
//output : a Smith John


//using splice() and split() method in array and other source
const oddNum = [1,3,5,7,9,11,13,15,17,19]
console.log(oddNum.splice(2,2))


const animal ="Cat"

console.log(animal.split(""))
//output: ['C', 'a', 't']


const fruits=["Apple","Banana","Mango","Dates"]
console.log(fruits.splice(1,3,"Pineapple","Pineapple","Pineapple"))
console.log(fruits)