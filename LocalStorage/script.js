// const user={
//     firstName:"Sushil",
//     lastName:"Chaudhary",
//     age:21,
//     country:"Nepal",
//     continent:"Asia"
// }
// const people=["Saliram","Sushil","Saroj","Dinesh","Tank"]


// //converting into string and locating into local storage 
// localStorage.setItem("user",JSON.stringify(user))
// localStorage.setItem("people",JSON.stringify(people))

// //converting into object
// const dataFromlocal1 = JSON.parse(JSON.stringify(user))
// const dataFromlocal2 = JSON.parse(JSON.stringify(people))

// //removeItem from localStorage
// localStorage.removeItem("user")
// localStorage.removeItem("people")

// //retrieving data from localStorage
// Object.entries(dataFromlocal1).forEach((data)=>{
//     console.log(data)
// })

// //retrieving data from localStorage
// Object.entries(dataFromlocal2).forEach((data)=>{
//     console.log(data)
// })

// const fruit=["Banana","Apple","Grape","Dates"]

// const user2={
//     firstName:"Rakesh",
//     lastName:"Roshan",
//     age:24,
//     country:"India",
//     continent:"Asia"
// }

// getLocalStorage(fruit)
// getLocalStorage(user2)


let username = document.querySelector('.name')
let userage = document.querySelector('.age')
let useremail = document.querySelector('.email')
let insertBtn = document.querySelector('#btn')


function getLocalStorage(){
    const user={
        userName:username.value,
        userAge:userage.value,
        userEmail:useremail.value
    }

    localStorage.setItem("user",JSON.stringify(user))
}


insertBtn.addEventListener('click',(event)=>{
    getLocalStorage()
    userage.value=""
    username.value=""
    useremail.value=""

})


// localStorage.removeItem("user")
// localStorage.clear()