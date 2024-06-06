const fruits= ["Apple","Banana","Grape"]

const result = fruits.filter((fruit,index,arr)=>{
    return fruit.toLowerCase().includes("a")
})
console.log(result)