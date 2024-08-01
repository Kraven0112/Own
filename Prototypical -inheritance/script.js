//Parent class
class Moon{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getDetail(){
        return `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`
    }

    //common method-1 for child class
    study(){
        console.log("study")
    }

    //common method-2 for child class
    work(){
        console.log("work")
    }
    //common method-3 for child class
    getHuman(){
        return "I am a human being."
    }
}

// children-1 class
class Student extends Moon{
    constructor(firstName,lastName,age,college){
        super(firstName,lastName,age)
        this.college = college
    }

    getCollegeName(){
        return`My college name is ${this.college}.`
    }

    study(){
        return "I am studying."
    }

}


//children-2 class
class Worker extends Moon{
    constructor(firstName,lastName,age,company){
        super(firstName,lastName,age)
        this.company = company
    }

    getCompnayName(){
        return `Tne company name is ${this.company}.`
    }

    work(){
        return "I am working."
    }

}


const student1 = new Student("Sushil","CHaudhary",21,"Sambat University")
const worker1 = new Worker("Ramesh","Yadav",35,"Microsoft")