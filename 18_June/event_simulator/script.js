const div = document.createElement('div')
const add = document.createElement('button')
const hr = document.createElement('hr')
const input = document.createElement('input')
add.innerHTML = "+"
add.classList.add('button')
div.classList.add('parent')

let num = 1
add.addEventListener('click',()=>{
        const para = document.createElement('p')
        para.classList.add('para')
        para.innerHTML = `${num}`
        div.append(para)
        num++
})

// const intervalId = setInterval(()=>{
//     if(num > 1000)
//         {
//             clearInterval(intervalId)
//         }
//     add.click()
// },10)

// setInterval(()=>{
//     input.blur()
// },4000)

document.body.append(input,add,hr,div)

