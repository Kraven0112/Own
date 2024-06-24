const show =  document.querySelector('#show')
const parentBtn = document.querySelector('#button')
const inputQuote = document.querySelector('input')

const quotes=[
    "Now this is the time to start your journey",
    "Your steps are precious every-time",
    "You have done half of your task",
    "You are doing well !! Keep going like that",
    "Now you have done it completely"
]
const change = document.createElement('button')
const addQuote = document.createElement('button')

change.innerHTML="Change Quote"
change.classList.add('change')

addQuote.innerHTML="Add Quote"
addQuote.classList.add('change')

parentBtn.append(change,addQuote)
let num = 0

addQuote.addEventListener('click',()=>{
  quotes.push(inputQuote.value)
  inputQuote.value=""
})
change.addEventListener('click',()=>{
    if(num == quotes.length)
        {
            num=0
        }

    show.innerHTML =  quotes[num]
    num++
    return "Almost done!!!"
})

