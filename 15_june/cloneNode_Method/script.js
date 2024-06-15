const parent = document.querySelector('#parent')
const child = document.querySelector('#child')

for(let i=2; i<=10; i++)
    {
        const copy = child.cloneNode()
        copy.innerHTML = i
        parent.appendChild(copy)
    }


const write = document.querySelector('input')
const push = document.querySelector('#add')

push.addEventListener('click',(()=>{

        const element = document.createElement('p')
        element.innerHTML = write.value
        document.querySelector('#case').appendChild(element)
   
}))
  