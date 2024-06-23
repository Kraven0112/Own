//second for Object.freeze() in an object
const user2={
    name:"Kiran Kumar",
    age:24,
    address:"Bangalore",
    country:"India"
}

Object.freeze(user2)

//deletion -- no changes in an object
delete user2.address
delete user2.name

//modification -- no changes in an object
user2.name="Sushil Kumar"
user2.age=21

//addition -- no changes in an object
user2.state="Karnataka"
user2.continent = "Asia"