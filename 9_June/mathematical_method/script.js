//Math.ceil()
console.log(Math.ceil(0.65)) //output is 1
console.log(Math.ceil(0.5)) //output is 1
console.log(Math.ceil(-2.5)) //output is -2

//Math.floor()
console.log(Math.floor(2.9)) //output is 2
console.log(Math.floor(1.9)) //output is 1
console.log(Math.floor(-2.1)) //output is -3

//Math.random()------prints random numbers
console.log(Math.random()*10+1)
console.log(Math.random()*10+2)
console.log(Math.random()*10+3)
console.log(Math.random()*10+4)

//Math.pow()
console.log(Math.pow(12,2))//ouptut is 144
console.log(Math.pow(9,2))//output is 81
console.log(Math.pow(8,2))//output is 64
console.log(Math.pow(7,2))//output is 49
console.log(Math.pow(11,2)) //output is 121

// Html Element creation in javascript 
const parent = document.getElementById('groot')

const element1 = document.createElement('h1')
element1.innerText="Hello I am h1"
parent.appendChild(element1)

const element2 = document.createElement('h2')
element2.innerText="Hello I am h1"
parent.appendChild(element2)


const image = document.createElement('img')
image.src="https://t4.ftcdn.net/jpg/05/48/87/11/360_F_548871133_1qUoweE7LcAmJOlVtNOikZKjXJoR4fhz.jpg"
image.style.width='100%'
parent.appendChild(image)

document.body.style.backgroundColor="#000000"
document.body.style.color="white"

console.log(location.href)