//reduce() method is for array

const numbers=[200,100,300,500]

//Adding elements using reduce() method
const result1 = numbers.reduce((accumulator,item)=>{
    return accumulator+item
})
console.log(result1)

// debugger
//Substraction using reduce() method
const result2 = numbers.reduce((accumulator,item)=>{
    return accumulator-item
})
console.log(result2)//output wil be -700


//Substraction using reduceRight() method

const result3 = numbers.reduceRight((accumulator,item)=>{
    return accumulator-item
})
console.log(result3)//output is -100