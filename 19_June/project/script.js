const display = document.querySelector('.display')
const addBtn = document.querySelector('#add')
const removeBtn = document.querySelector('#remove')
const message = document.querySelector('input')

addBtn.addEventListener('click',()=>{
    const para = document.createElement('p')
    para.innerHTML = message.value
    display.append(para)
})