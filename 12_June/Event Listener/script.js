const parent = document.querySelector('#parent')
const changer = document.querySelector('#changer')

changer.addEventListener('click',()=>{
     if(parent.style.backgroundColor=="white"){

         parent.style.backgroundColor="blue"
        } 

    else{
           parent.style.backgroundColor="white"
        }
})