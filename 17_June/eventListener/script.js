const input = document.querySelector('input')
const button = document.querySelector('button')
const para = document.querySelector('#pap')

//input eventListener
// input.addEventListener('input',(event)=>{
//     para.innerHTML = event.target.value
//      console.log(event.type)
// })

//change eventListener
// input.addEventListener('change',(event)=>{
//     para.innerHTML = event.target.value
//     console.log(event.type)
// })

//focus eventListener
// input.addEventListener('focus',(event)=>{
//     console.log(event.type)
//     para.innerHTML = event.target.value
// })

//blur eventListener
input.addEventListener('blur',(event)=>{
    console.log(event.type)
    para.innerHTML = event.target.value
     event.target.style.background = "pink"
})