const imgCarousel=[
    `https://img.freepik.com/premium-photo/gourmet-slider-burgers-with-miniature-buns_198067-2216.jpg`,
    `https://media.istockphoto.com/id/155358719/photo/mini-burgers.jpg?s=612x612&w=0&k=20&c=_Lrt3sluNgLfI3cyMwp6dRI8BLQw6cIGbJHWqOSTskE=`,
    `https://media.istockphoto.com/id/1070730232/photo/homemade-cheeseburger-sliders-with-tomato.jpg?s=612x612&w=0&k=20&c=qq2PY83lb8KqomJPYJ97zcni7j44Phh30mY5Vx9cnXw=`
]
const carolImg = document.querySelector('.carol-img')
const menuBtn = document.querySelector('.menu')
const menuItem = document.querySelector('.menuitems')

let n =0;

function show(){
    if(n==imgCarousel.length){
        n=0
    }
    carolImg.src = imgCarousel[n]
    n++
}

setInterval(show,3000)

menuBtn.addEventListener('click',(event)=>{
    if(menuItem.style.visibility == "hidden"){
        menuItem.style.visibility="visible"
    }else{
        menuItem.style.visibility = "hidden"
    }
})


let link = document.createElement('link')
link.type="text/css"
link.rel = "stylesheet"
link.href = "/style.css"

document.querySelector('head').appendChild(link)