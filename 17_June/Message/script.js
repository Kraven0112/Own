const message = document.querySelector('#message')
const button = document.querySelector('#click')

button.addEventListener('click',()=>{
    message.style.display="block"
    button.style.display="none"
})