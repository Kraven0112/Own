const  animals =["Cat","Dog","Rat","Buffalo","Cow"]

// shortcut using forEach() method
animals.forEach(function(fruit)
{
    console.log(fruit)
})

console.log("---------------")
console.log("---------------")


// Same as shortcut method
animals.forEach(get)

function get(animal)
{
    console.log(animal)
}