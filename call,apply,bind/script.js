const user={
    firstName:"Saliram",
    lastName:"Chaudhary",
}
const getFullName = function(counrty,city){
    console.log(this.firstName +" "+ this.lastName+" "+counrty+" "+ city)
}

// getFullName.call(user,"Nepal","Dhangadhi")
getFullName.apply(user,["Nepal","Dhangadhi"])

//using bind() method
const functionBind = getFullName.bind(user)
console.log(functionBind)
functionBind()

const fruits=["apple","banana","grape"]

const getfruit =function(element){
    console.log(element)
}
getFullName.apply(null,fruits)