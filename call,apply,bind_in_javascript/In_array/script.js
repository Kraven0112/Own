//using call() method in array
const fruit=["apple","banana","grape","dates","guava"]
const fruit2=["watermelon","mango","orange"]

const getAllfruit = function(other){
    console.log(fruit,other)
}

getAllfruit.call(fruit,fruit2)


//using apply() method in an array

const domAnimal = ["cat","dog","cow","buffalo","goat"]
const wildAnimal = ["tiger","lion","elephant","bear","deer"]

const getAllAnimal = function(other){
    console.log(domAnimal,other)
    for(let animal of other){
        console.log(animal.toUpperCase())
    }
}
getAllAnimal.apply(domAnimal,[wildAnimal])
