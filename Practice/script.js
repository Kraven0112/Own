//join("String") is used to separate element using string
const number1 = [0,1,2,3,5]
console.log(number1.join(" number "))


//flat(depth) method is used to make flat looking of nested array
const number = [0,1,2,3,5,[6,7,[8,9]]]
console.log(number.flat(2))



const body = document.querySelector('body')

function changeColor(){
    const randomColor = Math.floor(Math.random()*16778999).toString(16)

    body.style.backgroundColor = "#"+randomColor
}

setInterval(changeColor,2000)


//GCD -- Greatest Common Divisor

let num1 = 24
let num2 = 36
let divior = 0

for(let i=1; i<=num1 || i<num2; i++){
    if(num1%i==0 && num2%i==0){
        if(divior<i){
            divior = i
        }
    }
}
console.log(divior)






























const head =  document.querySelector('head')

const link = document.createElement('link')
link.rel = "stylesheet"
link.href = "./style.css"


head.append(link)