//using call() method in an object in javascript
const user ={
    firstName:"Sushil",
    lastName:"Chaudhary",
    age:21,
    country:"Nepal",
}

const getFullDetail = function(city,area){
    console.log(`${this.firstName} ${this.lastName} : ${this.age} : ${this.country} : ${city} : ${area}`)
}

getFullDetail.call(user,"Mahendranagar","Belauri")



//using apply() method in an object in javascript
const mountain={
    name:"Mt.Everest"
}
const getDetail = function(height,location){
    console.log(`${this.name} : ${height} : ${location}`)
}

getDetail.apply(mountain,["8848 m.square","Solukhumbu district"])



//using bind() method in javascript
const getDetail1 = function(){
    console.log(`${this.name}`)
}

getDetail1.call(mountain)

const binding = getDetail1.bind(mountain)//copying function

binding()