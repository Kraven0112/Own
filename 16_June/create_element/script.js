const parent = document.querySelector('#container')
// for(let i =1; i<=100; i++)
//     {
//         const  pElement = document.createElement('p')
//         pElement.innerHTML=`${i} -Hello I am ${i}`
//         pElement.id="munna"
//         parent.appendChild(pElement)
//     }


for(let i =1; i<=6; i++)
    {   
        const div = document.createElement('div')
        const para = document.createElement('p')
        const image = document.createElement('img')

        image.id="image"
        image.src=`image-${i}.jpeg`
        para.innerHTML=`${i}`

    
        div.append(image,para)
        parent.appendChild(div)
       
    }

// let image3 = ``

// for(let i = 1; i<=6; i++)

//     {
//         image3+=`
//          <div>
//         <img src="./image-${i}.jpeg" alt="">
//         <p>${i}</p>
//     </div>
//         `
//     }

//     parent.innerHTML = image3