const dropdown = document.querySelector('.menu-btn')
const menudropdown = document.querySelector('.drop-down')

dropdown.addEventListener('click',(event)=>{
    if(menudropdown.style.visibility=="hidden"){
        menudropdown.style.visibility="visible"
        document.querySelector('.menu-btn h1').style.rotate = "90deg"
    }
    else{
        menudropdown.style.visibility="hidden"
        document.querySelector('.menu-btn h1').style.rotate = "180deg"
    }
})