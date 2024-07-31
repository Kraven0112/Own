const output = document.querySelector('.output')
const increaseBtn = document.querySelector('#increase')
const decreaseBtn = document.querySelector('#decrease')
const resetBtn = document.querySelector('#reset')


let number = Number(output.innerHTML)



increaseBtn.addEventListener('click',(event)=>{
    event.stopPropagation()
    output.innerHTML = ++number
    if(number > 0){
        output.style.color="purple"
    }
})

resetBtn.addEventListener('click',(event)=>{
    event.stopPropagation()
    number = 0
    output.innerHTML = 0
    if(number == 0){
        output.style.color="black"
    }
})

decreaseBtn.addEventListener('click',(event)=>{
    event.stopPropagation()
    output.innerHTML = --number
    if(number < 0){
        output.style.color="navy"
    }
})

const link = document.createElement('link')
link.rel="stylesheet"
link.href="./style.css"

document.querySelector('head').append(link)
