//Using for_of loop for object

console.log("Program ki Begining")

const user = {
  name: "Sushil",
  age: 20,
  country: "Nepal",
  continent: "Asia",
}
//for leys
const userKeys = Object.keys(user)
for (let key of userKeys) {
  console.log(`Key : ${key}`)
}

console.log("-----------------------")

//foe value of key
const userValues = Object.values(user)
for (let value of userValues) {
  console.log(`Value: ${value}`)
}

console.log("-----------------------")

const userEntries = Object.entries(user)
//for entries in the form of array
for (let entry of userEntries) {
  //both will display an object's key and value as an array
  console.log(entry)
  console.dir(entry)
}

console.log("Program ki Chhutti")
