let h2 = document.querySelector('h2')
const increase = document.querySelector('#increase')
const decrease = document.querySelector('#decrease')

h2.value="1"
let value = parseInt(h2.value)

increase.addEventListener('click',()=>{
            h2.innerHTML = value++
})
decrease.addEventListener('click',()=>{
    h2.innerHTML = value--
})