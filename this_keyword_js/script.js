// //this keyword in nested function
// function get(){
//     function myget(){
//         console.log(this) //presents window object
//     }
//     myget()
// }
// get()


// //this in single hand function calling without new keyword
// function get2(){
//     console.log(this) //presents window object
// }
// get2()


// //this in single hand function calling without new keyword
// function get3(){
//     console.log(this) //presents get3 as an object
// }
// new get3()


//this keyword in user having regular function
const user1={
    name:"Boom",
    print(){
        console.log(this) //presents user1 object
    }
}


//this keyword in object having nested regular function
const user2={
    name:"groot",
    print(){
        function print2(){
            console.log(this) //presents window object
        }
        print2()
    }
}


//this keyword in object having inner arrow function
const user3={
    name:"Rocket",
    print(){
        const result=()=>{
            console.log(this) // presents user3 object
        }
        result()
    }
}


//this keyword in object having outer arrow function
const user4={
    userName:"Sushil",
    print:()=>{
        function print2(){
            console.log(this) //presents window  object
        }
        print2()
    }
}


//this keyword in object having nested arrow function
const user5={
    userName:"Sushil",
    print:()=>{
        const result = ()=>{
            console.log(this) //presents window object
        }
        result()
    }
}




const h1 = document.querySelector('h1')

//this keyword in event listener and arrow function
// h1.addEventListener('click',(event)=>{
//     console.log(this) //presents window object
// })


//this keyword in event listener and regular function
// h1.addEventListener('click',function(event){
//     console.log(this) //presents h1 as an object
//     console.dir(event.target)
// })