// first-way of using fetch in javascript
// const promise = fetch('https://restcountries.com/v3.1/all')

// promise.then(function(response){
//     console.log(response)
//     return response.json()
// })
// .then(function(data){
//     console.log(data)
// }).catch(function(error){
//     console.log(error)
// })

// second-way to use fetch in javascript 
// async await in javascript

const api_url = "https://restcountries.com/v3.1/all"

// async function getApi(){
//     const response = await fetch(api_url)
//     const data = await response.json()
//     console.log(response)
//     console.log(data)
// }
// getApi().catch(function(error){console.log(error)}) //old way of handling error 


// new way of handling promise,api and error in javascript
async function makeApi(){
try{
    const response = await fetch(api_url)
    const data = await response.json() 
    console.log(response)
    console.log(data)
}catch(error){
    console.error(error)
}
}
makeApi()