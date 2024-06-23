//first  Object.seal() method in an objec
const user1 = {
    userName:"Sushil Chaudhary",
    age:21,
    address:"Nepal Kanchanpur",
    continent:"Asia"
}

Object.seal(user1)
//deletion ---- no change in object
delete user1.address
delete user1.userName

//addition --- no changes in an object
user1.city="Mahendranagar"
user1.municiplaity="Belauri"

//modification -- will change only in existed keys and values.
user1.userName="Groot"
user1.age="5 days"