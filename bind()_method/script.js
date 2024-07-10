//using call() method in javascript in an object
const user={
    firstName:"Sushil",
    lastName:"Chaudhary"
}

let getFullName = function(country,region){
    console.log(this.firstName + " "+ this.lastName + " "+country + " "+ region)
    //thid indicates user object
}

getFullName.call(user,"Nepal","Terai")


//using apply() method in javascript in an object

const user2={
    firstName:"Mohan",
    middleName:"Lal",
    lastName:"Raane",
}

let getFullName1 = function(country,city,provinceNo){
    console.log(this.firstName+" "+this.middleName+" "+this.lastName+" "+country+" "+city+" "+provinceNo)

    //this indicates user2 object
}


getFullName1.apply(user2,["Nepal","Mahendranagar",7])


const fruit = ["apple","banana","grape"]
const getDetail = (surname,age,country)=>{
    console.log(surname,age,country)
}


getDetail.call(null,"Ram","Goswami",21)


//using call and apply in array

const animals =["cat","dog","rat","bat","cow"]
const good=["nice","better","best"]

const getAnimal = (object,array)=>{
  console.log(object,array)
}
getAnimal.call(null,good,animals)


const numbers=[1000,768,1067,444,999]
const max= Math.max.apply(null,numbers)
const max1 = Math.max(...numbers)
console.log(max)//output 1067
console.log(max1)//output 1067




//bind() method is used to copy and create new function in javascript

const company={
    name:"MKR Industries Pvt Ltd",
    noOfEmp : 5000,
    CEO:"Mahira Khan"
}

const getCompay = function(){
    console.log(this.CEO,this.noOfEmp,this.name)
}

getCompay.call(company)


const newCompany = getCompay.bind(company)
console.log(newCompany) //output if function 
newCompany()//invoked after bind()