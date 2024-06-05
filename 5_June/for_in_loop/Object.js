// Using for_in loop for object

console.log("Program ki begining")

const city ={
    name:"Bangalore",
    population:"5 crore",
    pollution:"80%",
    state:"Karnataka"
}

for(let i in city){
    console.log(`key : ${i}`) //outputs are only keys
    console.log(`value : ${city[i]}`)
    console.log("------------------------")
}

console.log("Program ki chhutti")