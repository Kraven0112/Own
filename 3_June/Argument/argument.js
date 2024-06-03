console.log("Program Started")

// Multiple arguments using arguments objects

const result = function (){
   
     for(let i=0;i<arguments.length;i++)
        {
            console.log(arguments[i])
        }
}
result("Hello",20,"Sushil",30,40,"apple","Banana")

result({
    name:"Sushil",
    surname:"Chaudhary",
    age:20
})
result(["cow","Dog","Rat","Cat","Rabbit","Bunny"])

console.log(typeof result)
console.log("Program ended")



// We can pass objects,arrays,string,numbers and other possible values an arguments in function in javascript.