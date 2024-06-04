const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')

button1.addEventListener('click',()=>{
    document.getElementById('heading').style.color="white"
})

button2.addEventListener('click',()=>{
    document.getElementById('heading').style.fontSize='3em'
})

button3.addEventListener('click',()=>{
    document.getElementById('heading').style.textShadow='4px 4px 9px'
})
button4.addEventListener('click',()=>{
    document.getElementById('heading').style.color='black'

    document.getElementById('heading').style.fontSize='2em'

    document.getElementById('heading').style.textShadow='none'
})