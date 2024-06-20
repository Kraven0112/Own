const userName = document.querySelector('#nameInput')
const userAge = document.querySelector('#ageInput')
const showname = document.querySelector('#outputname')
const showage = document.querySelector('#outputage')

const myData =JSON.parse(localStorage.getItem("myData")) || {}

//if deleted from local storage and reset it
if(myData.name && myData.age)
    {
        showage.innerHTML = myData.age
        showname.innerHTML = myData.name
    }
userName.addEventListener('input',(event)=>{
    myData.name = event.target.value
    localStorage.setItem("myData",JSON.stringify(myData))
    showname.innerHTML = event.target.value
})
userAge.addEventListener('input',(event)=>{
    myData.age = event.target.value
    localStorage.setItem("myData",JSON.stringify(myData))
    showage.innerHTML = event.target.value
})


//If data are in local storage
// showname.innerHTML = myData.name
// showage.innerHTML  = myData.age


// show.innerText = localStorage.getItem('userName')

// userInput.addEventListener('input',(event)=>{
//     localStorage.setItem("userName",event.target.value)
//     show.innerHTML = localStorage.userName
// })