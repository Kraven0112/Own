const parent = document.querySelector('#groot')
const child1 = document.querySelector('h1')
const child2 = document.querySelector('p')


//creating elements

const element1 = document.createElement('h1')
element1.innerHTML="I am h1."

const element2 = document.createElement('h2')
element2.innerHTML="I am h2."

const element3 = document.createElement('img')
element3.src="https://i.pinimg.com/736x/81/c4/bc/81c4bc6085a7d6e112af306d283e6524.jpg"

const copy1 = element1.cloneNode(true)
const copy2 = element2.cloneNode(true)
const copy3 = element3.cloneNode(true)
const copy4 = child1.cloneNode(true)
const copy5 = child2.cloneNode(true)

const arrElement = [copy1,copy2,copy3,copy4,copy5]
const arrElement2 = [element1,element2,element3]

// parent.append(copy1,copy2,copy3)
// parent.appendChild(copy4)

// for(const element of arrElement)
//     {
//         parent.appendChild(element)
//     }


for(const element of arrElement2)
    {
        parent.appendChild(element)
    }