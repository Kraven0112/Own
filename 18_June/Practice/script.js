const parent = document.querySelector('#parent')
const parentBtn = document.querySelector('#btn')
const top1 = document.createElement('button')
const right1 = document.createElement('button')
const bottom1 = document.createElement('button')
const left1 = document.createElement('button')

top1.innerHTML="Top"
right1.innerHTML="Right"
bottom1.innerHTML="Bottom"
left1.innerHTML="Left"
top1.classList.add('button')
right1.classList.add('button')
bottom1.classList.add('button')
left1.classList.add('button')

parentBtn.append(top1,right1,bottom1,left1)

top1.addEventListener('click',()=>{
    parent.classList.add('top')
})

right1.addEventListener('click',()=>{
    parent.classList.add('right')
})
bottom1.addEventListener('click',()=>{
    parent.classList.add('top')
})



