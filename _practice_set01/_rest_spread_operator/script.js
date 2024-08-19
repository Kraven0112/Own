// rest operator
function getRest(...number){
    let sum = 0
    for(let i = 0; i<number.length; i++){
        sum += number[i]
    }
    return sum
}
const output1 = getRest(2,3,4,5,6)
console.log(output1)


function getRest1(...para){
    let mult = 1
    for(let i =0; i<para.length; i++){
        mult *= para[i]
    }
    return mult
}
const output2 = getRest1(1,2,3,4,5)
console.log(output2)

function getRest2(...para){
    let string = ""
    for(let i = 0; i<para.length; i++){
        string += para[i]
    }
    return string
}

const output3 = getRest2('s','u','s','h','i','l')
console.log(output3)


//spread operator
const [num1,num2,...allNum] = [10,20,30,40,50,60,70,80,90,100]

function getSpread(para){
    let sum = 0
    for(let i=0; i<para.length; i++){
        sum += para[i]
    }
    return sum
}

const output4 = getSpread(allNum)
console.log(output4)


const{username,userage,...allproperty} = {username:"karan",userage:21,country:"Nepal",continent:"Asia",district:"Kanchanpur"}

console.log(username)
console.log(userage)

const output5 = Object.keys(allproperty)
console.log(output5)
const output6 = Object.values(allproperty)
console.log(output6)
const output7 = Object.entries(allproperty)
console.log(output7)

function getArray(para){
    for(let i=0; i<para.length; i++){
        console.log(para[i])
    }
}
getArray(output7)