//splice method in javascript
//both parameter are included in splice method
//splice method affects in original array
const fruits = ["Apple","Banana","Grape","Orange","Papaya"]
console.log(fruits.splice(1,3))
console.log(fruits)


//slice method in javascript
// first param is included but second param is excluded
//slice method doesn't affect in original array
const animals=["Cat","Dog","Cow","Buffalo","Goat"]
console.log(animals.slice(1,3))
console.log(animals)


const oddNum = [1,3,5,7,9]
//map method 
oddNum.map((odd)=>{
    console.log(odd + 1)
})

//forEach method
oddNum.forEach((odd)=>{
    console.log(odd + 2)
})

//reduce method
const uniqueNum =[2,2,3,3,4,4,5,5,6,6]
const output = uniqueNum.reduce((acc,curr)=>{
    if(!acc.includes(curr)){
        acc.push(curr)
    }
    return acc
},[])
console.log(output)