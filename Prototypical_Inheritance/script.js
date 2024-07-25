//Prototypical Inheritance

class User{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    //return type method
    getFullDetail(){
        return `This is return method.`
    }

    //get method
    get FullDetail(){
        return `Name-${this.firstName} ${this.lastName} Age-${this.age}`
    }

    //set method
    set setDetail(value){
        const[firstName,lastName,age] = value.split(' ')
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    //study method
    study(){
        console.log("study")
    }

    //work method
    work(){
        console.log("work")
    }
}

class Student extends User{
    constructor(firstName,lastName,age,standard){
        super(firstName,lastName,age)
        this.standard = standard
    }

    //study method
    study(){
        console.log("I am studying")
    }

}

class Employ extends User{
    constructor(firstName,lastName,age,company){
        super(firstName,lastName,age)
        this.company = company
    }

    // work method
    work(){
        console.log("I am working")
    }
}

const student1 = new Student("Sushil","Chaudhary",21,12)
const emp1 = new Employ("Kabir","Singh",30,"Google")

