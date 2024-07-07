const firstName = document.querySelector('.firstname')
const lastName = document.querySelector('.lastname')
const userAge  = document.querySelector('.age')
const userCountry = document.querySelector('.country')


const user = [{
    id:1,
    firstName :"Sushil",
    lastName:"Chaudhary",
    age:21,
    country:"Nepal",
    address:{
        district:"Kanchanpur",
        city:"Mahendranagar",
        village:"Bhakunda"
    }
},
{
    id:2,
    firstName:"Hira",
    middleName:"Lal",
    lastName:"Chaudhary",
    age:36,
    country:"Nepal"
},
{
    id:3,
    firstName:"Asmiata",
    lastName:"Chaudhary",
    age:34,
    country:"Nepal"
},
{
    fruits:[
        "Apple",
        "Banana",
        "Dates",
        "Pineapple",
        "Guava"

    ]
}
]




const promise3 = fetch('https://dummyjson.com/posts/add',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
        body:user,
        userId:25
    })
})
.then((response)=>response.json())
.then((data)=>{
    console.log(data)
    firstName.innerHTML =`Firstname of user : ${data.body[0].firstName}`
    lastName.innerHTML = `Lastname of user ; ${data.body[0].lastName}`
    userAge.innerHTML = `Age of user : ${data.body[0].age}`
    userCountry.innerHTML = `country-name : ${data.body[0].country}`
})
.catch((error)=>console.log(error))