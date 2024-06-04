//function expression
// we cannot pass multiple arguments using arguments object in function expression
// And we cannot access function expression before initialization
console.log("Program started")


// result(500) // passes error--cannot access before initialization

const result = function(arguments)
{
    console.log(arguments)
}
result(2004)
result(2006)
result("Sushil")

console.log("Program Ended")