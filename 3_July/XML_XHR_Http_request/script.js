//Connecting or interacting with another server using xml in javascript

const image = document.querySelector('.image')
const requestBtn = document.querySelector('.btn')

requestBtn.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest()

    xhr.responseType = "json"
    xhr.addEventListener('load',()=>{
        console.log(xhr)
        image.src = xhr.response.message
    })

    xhr.open("GET","https://dog.ceo/api/breeds/image/random ")
    xhr.send()
})