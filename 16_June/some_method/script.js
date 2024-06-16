const numbers = [1,2,3,4,5]
// const result = numbers.some((element,index,array)=>{
//    return element >= index+1
// })


const result = numbers.some((element,index,array)=>{
    return element >= numbers[index]
 })

console.log(result)