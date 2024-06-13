const element1= document.querySelector('h1')
const element2 = document.querySelector('p')
const element3 = document.querySelector('#promise')

const arrClass=['moon','sun','dark','light']

//removing css from element1
for(const css of arrClass)
    {
        element1.classList.remove(css)
    }
//removing css from element2
for(const css of arrClass)
    {
        element2.classList.remove(css)
    }
//adding css to element3
for(const css of arrClass)
    {
        element3.classList.add(css)
    }
