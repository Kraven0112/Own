const parent = document.querySelector('form')
const inputValue = document.querySelector('#age')
const output = document.querySelector('.output strong')
const mydate = new Date()

//current year
const currentYear = mydate.getFullYear()

parent.addEventListener('submit',(event)=>{
    event.preventDefault()
    if(event.currentTarget.children[1]){
        const birthYear = currentYear-Number(inputValue.value)
        output.innerHTML=`I was born in ${birthYear}. !! Congratulation to me to this shit world. `
    }
})