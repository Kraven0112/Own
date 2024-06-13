//classList.toggle() method in javascript

const para = document.querySelectorAll('p')

for(const element of para)

    {
        element.classList.toggle('font')
        element.classList.toggle('background')
        element.classList.add('animation')
    }