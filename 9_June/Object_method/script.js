//Creating multi-layer object
const user = {
  userName: "Sushil Chaudhary",
  age: 21,
  country: "Nepal",
  continent: "Asia",
  district: "Kanchanpur",
  address: {
    city: "Mahendranagar",
    town: "Belauri",
    village: "Bhakunda",
  },
}

//Accessing keys only of the object user
const userKeys = Object.keys(user)
console.log(userKeys)

const userAddressKeys = Object.keys(user.address)
console.log(userAddressKeys)

//Accessing values of all keys from object
const userValues = Object.values(user)
console.log(userValues)

const userAddressValues = Object.values(user.address)
console.log(userAddressValues)

//Accessing all the keys and values from object
const userEntries = Object.entries(user)
console.log(userEntries)

const userAddressEntries = Object.entries(user.address)
console.log(userAddressEntries)