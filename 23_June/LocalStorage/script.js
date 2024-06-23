const userName = document.querySelector('#username')
const userAge = document.querySelector('#userage')
const userAddress = document.querySelector('#useraddress')
const nameShow = document.querySelector("#nameshow")
const ageShow = document.querySelector("#ageshow")
const addressShow = document.querySelector("#addressshow")

const userData = JSON.parse(localStorage.getItem("userData")
) || {}

//This below condition is for automatically retrieving data from localStorage in javascript  When page is reloaded 
if(userData.name)
    {
        nameShow.innerHTML = userData.name
    }
if(userData.age)
    {
        ageShow.innerHTML = userData.age
    }
if(userData.address)
    {
        addressShow.innerHTML = userData.address
    }


userName.addEventListener('input',(event)=>{
    userData.name = event.target.value
    nameShow.innerHTML = event.target.value
    localStorage.setItem("userData",JSON.stringify(userData))
})
userAge.addEventListener('input',(event)=>{
    userData.age = event.target.value
    ageShow.innerHTML = event.target.value
    localStorage.setItem("userData",JSON.stringify(userData))
})
userAddress.addEventListener('input',(event)=>{
    userData.address = event.target.value
    addressShow.innerHTML = event.target.value
    localStorage.setItem("userData",JSON.stringify(userData))
})