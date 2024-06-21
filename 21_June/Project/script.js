const signinBtn = document.querySelector("#signinBtn")
const signupBtn = document.querySelector("#signupBtn")
const nameField = document.querySelector('#nameField')
const title = document.querySelector('#title')

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0"
    title.innerHTML = "Sign-In"
    signupBtn.classList.add('disable')
    signinBtn.classList.remove('disable')
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px"
    title.innerHTML = "Sign-Up"
    signupBtn.classList.remove('disable')
    signinBtn.classList.add('disable')
}