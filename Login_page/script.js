let loginBtn = document.querySelector('.submit')
let username = document.querySelector('.username1')
let password = document.querySelector('.password1')
let error = document.querySelector('.error')

loginBtn.addEventListener('click',()=>{
    if(username.value == "" && password.value == ""){
        error.style.visibility = "visible"
        window.location.href="#"
    }
    else{
        window.location.href='https://www.youtube.com/'
        error.style.visibility = "hidden"
    }
})