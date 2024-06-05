//Using for_in loop  in array


console.log("Program ki Begining")

const fruits = ["Orange","Apple","Banana","Dates","Grapes"]

for(let fruit in fruits)
    {
        console.log(`index no.: ${fruit}`)//it prints index no. only
        console.log(`element : ${fruits[fruit]}`)// it prints elements name 
        console.log("-------------------------")
    }

console.log("Program ki chhutti")