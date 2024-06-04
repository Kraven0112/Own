//Arrow function 
//we cannot use arguments object in arrow function because it is not available in arrow function
console.log("Program Started")

const add =(x,y)=>{
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
}

add(24,2)


console.log("Program Ended")