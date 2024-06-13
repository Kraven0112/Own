const heading = document.querySelectorAll('h2')
const paragraph = document.querySelectorAll('p')

//Adding css using classList and its method

//for h2
for(const element of heading)
    {
        element.classList.add('font')
        element.classList.add('background')
        element.classList.add('size')
        element.classList.add('animation')
    }

//for p
for(const element of paragraph)
    {
        element.classList.add('font')
        element.classList.add('background')
        element.classList.add('size')
        element.classList.add('animation')
    }

    document.body.style.cssText=`color:white;
    background-color:black;`
