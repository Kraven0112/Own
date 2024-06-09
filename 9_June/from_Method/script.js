//creating array from string
const username = "Sushil"
console.log(Array.from(username))

//creating array from object
const city = {
  name: "Bangalore",
  state: "Karnataka",
  distrit: "Bengaluru",
  condition: "polluted",
  population: "10cr",
}

//array of each key and value from object
const cityEntries = Object.entries(city)
console.log(cityEntries)
console.log(cityEntries[0])
console.log(cityEntries[1])
console.log(cityEntries[2])

//array of each key from object
const cityKeys = Object.keys(city)
console.log(cityKeys)

//array of each value from object
const cityValues = Object.values(city)
console.log(cityValues)

