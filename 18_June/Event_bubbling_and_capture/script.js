const parent = document.querySelector('#parent')
const smallChild = document.querySelector('#smaller')
const bigChild = document.querySelector('#bigger')


window.addEventListener('click',(event)=>{
    console.log("window event listener")
},true)


document.addEventListener('click',(event)=>{
    console.log("document event listener")
},true)

document.body.addEventListener('click',(event)=>{
    console.log("body event listener")
},true)

parent.addEventListener('click',(event)=>{
    console.log("parent event listener")
},true)

bigChild.addEventListener('click',(event)=>{
    console.log("bigChild event listener")
},true)

smallChild.addEventListener('click',(event)=>{
    console.log("smallChild event listener")
},true)

