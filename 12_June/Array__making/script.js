const element1 = document.querySelector("#head1")
const element2 = document.querySelector("#head2")
const element3 = document.querySelector("#head3")
const element4 = document.querySelector("#head4")
const element5 = document.querySelector("#head5")

const array = [element1, element2, element3, element4, element5]

for (const element of array) {
  element.className = "css"
  element.innerHTML = "Panda boy getting well popular"
}


const parent = document.querySelector('#parent')
const child = document.querySelector('#child')

for(let i =1; i<=100 ; i++)
    {
        const copy = child.cloneNode(true)
        copy.innerHTML=`No.${i}`
        copy.className='css'
        parent.append(copy)
        parent.style.cssText=`
        display:grid;
        align-items:center;
        justify-content:center;
        `
        copy.style.cssText=`
        width:100px;
        height:100px;
        color:white;
        background-color:navy;
        font-size:30px;
        margin:10px;
        rotate:60deg;
        `
    }