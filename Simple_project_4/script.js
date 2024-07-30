let colorName = document.querySelector('.color span')
let changer = document.querySelector('.changer')
let body =  document.querySelector('body')


changer.addEventListener('click',(event)=>{
    const random = Math.floor(Math.random()*10161718).toString(16)
    body.style.backgroundColor="#"+random
    colorName.innerHTML = "#"+random


    const red = Math.floor(Math.random()*200+55)

    console.log(red)

})



