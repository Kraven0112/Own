const animals =["Cat","Cow","Buffalo","Dog","Rat"]

//shortcut for arrow function
animals.forEach((animal)=>{
    console.log(animal)
})




console.log("-----------------")
console.log("-----------------")




//same as shortcut method
//we cannot hoist function expression before initialization
const result = ((animal)=>{
    console.log(animal)
})

animals.forEach(result)
