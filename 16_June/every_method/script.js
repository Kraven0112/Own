const things = ["Apple", "Apcher", "Aprove", "Aphaar", "Apti"]


const result = things.every(get)
console.log(result)

function get(name)
{
   return name.includes("p")
}
get(things)




