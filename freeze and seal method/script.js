//using seal() method in an object
const user ={
    firstName:"Sushil",
    lastName:"Chaudhary",
    age:21,
    country:"Nepal",
    city:"Mahendranagar",
}
Object.seal(user)
//adding item in an object --> can't add 
user.area="Belauri"
user.height=5.4

//modify of existing item --> can modify existing item
user.age=40
user.firstName="Mahesh Bikram"

//delete or remove item from object -->can't do that
delete user.age
delete user.firstName



//using freeze() method in an object
const animal={
    name:"cat",
    age:1,
    behavior:"friendly",
    food:"rat"
}

Object.freeze(animal)

//adding item in an object --> can't do it
animal.weight="4kg"
animal.height="20cm"

//modify existing item --> can't do it
animal.age=2
animal.name="dog"

//delete or remove item --> can't do it
delete animal.name
delete animal.age