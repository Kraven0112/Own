console.log("Function having own property.")
get(2,4,6,8,10)

function get() //we can hoist function declaration
{
    for(let i=0;i<arguments.length;i++)
        {
            console.log(arguments[i])
        }
}
get(12,12,12,2,"2")
get(["Cow","Dog","Cat"])
get({
    fruit:"Orange",
    weight:"50 kg",
    price:2000
})
// arguments is a object which is used to access all the closures and lexical scoped values as an arguments
console.log("Program Ended")