//using GET request method to fetch data or retrieve data

// const promise = fetch('https://dummyjson.com/users',{
//     method:'GET'
// })
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

//using POST method to send data in the server to update and for processing

const promise = fetch('https://dummyjson.com/posts/add',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
        title:"Respect everyone in the world",
        userId :23,
        body:"Be good for all. This the rule of nature."
    })
})
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))

console.log(promise)


//using DELETE request method to delete the data from server.
fetch('https://dummyjson.com/posts/249',{
    method:'DELETE',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
        userId:23
    })
})
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
