// //object destructure example-1

// const obj1 = {
//     userName:"Kiran Malla",
//     age:23,
//     country:"Nepal",
//     district:"Dharan",
//     continent:"Asia"
// }

// //first level destructure of an object
// const{userName,age,country,...all} = obj1

// console.log(userName)
// console.log(age)
// console.log(country)
// console.log(all)

// //second level destructure of an object

// const{userName:myName,age:userAge,...property} = obj1
// console.log(myName)
// console.log(userAge)
// console.log(property)

// //third level destructure of an object
// const[name,aGe,...full] = Object.values(obj1)
// console.log(name)
// console.log(aGe)
// console.log(full)


// //fourth level destructure of an object

// const[clientName,clientAge,...client] = Object.keys(obj1)
// console.log(clientName)
// console.log(clientAge)
// console.log(client)

// const ourOutput1 = Object.values(obj1).map(element=>{return element})
// console.log(ourOutput1)

// const ourOutput2 = Object.keys(obj1).map(element=>{return element})
// console.log(ourOutput2)

// const ourOutput3 = Object.entries(obj1).map(property=>{return property})

// function getPropertyValue(param){
//     for(let i =0; i<param.length; i++){
//         console.log(param[i])
//     }
// }
// getPropertyValue(ourOutput3)

// const [arr1,arr2,arr3,...allArray] = Object.entries(obj1)
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(allArray)


// level of destrcturing api data 
const api_url = "https://api.github.com/users/Kraven0112"

async function getApi(){
    const repsonse = await fetch(api_url)

    const data = await repsonse.json()
    
    const out = Object.entries(data)

    for(let i = 0; i<out.length; i++){
        console.log(out[i])
    }
}
getApi().catch(function(error){console.error(error)})