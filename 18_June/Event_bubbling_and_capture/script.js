const parent = document.querySelector('#parent')
const smallChild = document.querySelector('#smaller')
const bigChild = document.querySelector('#bigger')


window.addEventListener('click',(event)=>{
    console.log("window event listener")
})

document.addEventListener('click',(event)=>{
    console.log("sdocument event listener")
})

document.body.addEventListener('click',(event)=>{
    console.log("body event listener")
})

parent.addEventListener('click',(event)=>{
    console.log("parent event listener")
})

bigChild.addEventListener('click',(event)=>{
    console.log("bigChild event listener")
})

smallChild.addEventListener('click',(event)=>{
    console.log("smallChild event listener")
})

