//Oops in javasript
//Topic  -  Encapsulation
function createUserA(userName,userSurname,userAge) {
  const user= {
    firstname:userName,
    lastName:userSurname,
    age:userAge,
    getYearOfBirth() {
      return new Date().getFullYear() - this.age
    },
  }
  return user
}

const user1 = createUserA("Sushil","Chaudhary",21)
const user2 = createUserA("Ram","Singh",22)

console.log(user1.getYearOfBirth === user2.getYearOfBirth) // output is false because it is creating separate memory location for every single user operation

// Topic -- Abstraction
const car={
    start(){
        console.log("Car is starting")
    },
    accelerate(speed){
        console.log(`Now car speed is ${speed} km/hr.`)
    }
}

car.start()
car.accelerate(230)




//Topic --- polymorphism
function getYourDetail(){
    return `Hello my name is ${this.firstname} ${this.lastName}. I am ${this.age} years old.`
}

function createUserB(name,surName,age){
    const user={
        firstname:name,
        lastName:surName,
        age:age,
        getYourDetail
    }
    return user
}

const user01 = createUserB("Sushil","Chaudhary",21)
const user02 = createUserB("Ramdev","Singh",23)

console.log(user01.getYourDetail === user02.getYourDetail) // output is true because function is creating same memory location for every single operation.

//Topic --- Inheritance

function CreateUserC(firstName,lastName,age){
   this.firstName=firstName
   this.lastName=lastName
   this.age=age
}

CreateUserC.prototype.getFullDetail=function(){
    return `Hello My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`
}

const userMe = new CreateUserC("Subhash","BikramSingh",21)
const userYou = new CreateUserC("Manish","Thapa",22)

console.log(userMe.getFullDetail === userYou.getFullDetail) //output is true because getFullDetail() function is creating same memory location.