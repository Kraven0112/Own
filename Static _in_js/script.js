class CreateUser{
    static company="IZEE Pvt. Ltd"
    static getString(name){
        return `My name is ${name}.`
    }
}

console.log(CreateUser.getString("Sushil Chaudhary"))
console.log(CreateUser.getString("Saliram Chaudhary"))
console.log(CreateUser.getString("Dinesh Chaudhary"))
console.log(CreateUser.getString("Gaurav Chaudhary"))
console.log(CreateUser.company)