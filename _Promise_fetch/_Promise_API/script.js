// creating promises
const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve("promise1 is resolved.")
        reject("promsie1 is rejected.")
    },4000)
})

const p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve("promise2 is resolved.")
        reject("promise2 is rejected")
    },6000)
})

const p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve("promise3 is resolved.")
        reject("promise3 is rejected.")
    },8000)
})

// Promise.any()
const promiseSet1 = Promise.any([p1,p2,p3])
promiseSet1.then(function(data){
    console.table(data)
}).catch(function(error){
    console.error(error)
    console.table(error.errors) // returns array of errors
})

// Promise.all()
// const promiseSet2 = Promise.all([p1,p2,p3])
// promiseSet2.then(function(data){
//     console.table(data)
// }).catch(function(error){
//     console.log(error)
// })

// Promise.allSettled()
// const promiseSet3 = Promise.allSettled([p1,p2,p3])
// promiseSet3.then(function(data){
//     console.table(data)
// }).catch(function(error){
//     console.log(error)
// })

// Promise.race()
// const promiseSet4 = Promise.race([p1,p2,p3])
// promiseSet4.then(function(data){
//     console.table(data)
// }).catch(function(error){
//     console.log(error)
// })