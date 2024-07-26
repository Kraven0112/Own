const registerBtn = document.querySelector('#paraloon')
const error = document.querySelector('.error')
const userName = document.querySelector('.name')
const phoneNo = document.querySelector('.number')
const userEmail = document.querySelector('.email')
const password = document.querySelector('.password')

registerBtn.addEventListener('click',(event)=>{
    if(userName.value == ''){
        error.style.display='block'
    }
    else if(phoneNo.value == ''){
        error.style.display='block'
    }
    else if(userEmail.value == ''){
        error.style.display='block'
    }
    else if(password.value == ''){
        error.style.display='block'
    }
    else{
        window.location.href = 'https://socialmedial0112.netlify.app/'
        userName.value ='Enter your name'
        phoneNo.value ='Enter phone number'
        userEmail.value ='Enter your email'
        password.value ='Enter password'
        error.style.display='none'
    }
})