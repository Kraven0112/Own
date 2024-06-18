const form = document.querySelector('form')
const userName = document.querySelector('#username')
const userEmail = document.querySelector('#email')
const button = document.querySelector('button')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(event.currentTarget)

    let myData = new FormData(form)
    // console.log(myData) //FormData object
    // myData.delete() //delete key/value 

    for(const element of myData.entries())
        console.log(element)
})