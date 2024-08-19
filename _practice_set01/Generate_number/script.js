let output = document.querySelector('#output')
let generate = document.querySelector('#generate')
let input = document.querySelector('#input')


generate.addEventListener('click',function(){
    let number = Number(input.value)
    let string = ''
    for(let i=1; i<=number; i++){
        string += Math.floor(Math.random()*10)
    }
    output.innerHTML = string
    input.value = ''
})