const parent = document.querySelector('#parent')
const bigOne = document.querySelector('#child2')
const smallOne = document.querySelector('#child1')

parent.addEventListener('click',()=>{
    console.log("parent is locked")
})

bigOne.addEventListener('click',()=>{
    console.log("First child is locked.")
})

smallOne.addEventListener('click',(event)=>{
    // event.stopPropagation()
    console.log("Second child is locked.")
},{capture:false,once:true})