const parent = document.body
const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    parent.classList.toggle('dark')
    parent.classList.toggle('light')
})