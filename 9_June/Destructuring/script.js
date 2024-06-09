//Destructuring array elements
const animals = ["Cat", "Dog", "Cow", "Buffalo", "Rat"]

//first-way of destructuring\
const [animal1, animal2, ...all] = animals
console.log(animal1)
console.log(animal2)
console.log(all)

//second-way of destructuring elements fron array
const { 0: ani1, 1: ani2, 4: ani5 } = animals
console.log(ani1)
console.log(ani2)
console.log(ani5)


//Destructuring keys and values from object
const cat = {
    catName:"Kitty",
    age:"5 months",
    behavior:"friendly",
    food:{
        breakfast:"Milk",
        lunch:"CatFood-berry",
        dinner:"fish"
    }
}
//single layer destructuring 
const{catName:Name,age:Age,behavior:Behavior,food:Food} = cat
console.log(Name)
console.log(Age)
console.log(Behavior)
console.log(Food)

//Multiple-layer destructuring 
const {food:{breakfast:Breakfast},food:{lunch:Lunch},food:{dinner:Dinner}} = cat
console.log(Breakfast)
console.log(Lunch)
console.log(Dinner)