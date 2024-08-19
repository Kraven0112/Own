// call method in javascript
function getFullName(country,district,continent){
    // console.log(this) //indicating obj1
    return `My name is ${this.firstName} ${this.lastName}. I am from ${country} ${district} ${continent}.`
}

const obj1 = {
    firstName:"Akash",
    lastName:"Arora"
}

const ouptut1 = getFullName.call(obj1,"Nepal","Manang","Asia")
console.log(ouptut1)


// function borrowing using call method in javascript
const obj2 = {
     firstName:"Anuj",
     lastName:"Jha",
     age:21,
     country:"India",
     printName(){
        return `${this.firstName} ${this.lastName}.`
     }
}

const obj3 = {
    firstName:"Ashok",
    lastName:"Dangil"
}

const output3 = obj2.printName.call(obj3)
console.log(output3)


// this indicates
const obj4 = {
    animal:"cat",
    // because of enclosing lexical context
    getAnimalName:()=>{console.log(this)}
}
obj4.getAnimalName()


// apply function

function f1(para1,para2){
    console.log(para1,para2)
    return `${this.firstName} ${this.lastName}`
}

const obj5 = {
    firstName:"Anshu",
    lastName:"Maaan"
}

const result1 = f1.apply(obj5,["parul","comma"])
console.log(result1)