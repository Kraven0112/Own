let num = 0
let productImg = document.querySelector('.image')
let title = document.querySelector('.title')
let category = document.querySelector('.category')
let brand = document.querySelector('.brand')
let price = document.querySelector('.price')
let description = document.querySelector('.description')
let rating = document.querySelector('.rating')
let nextBtn = document.querySelector('button')


async function getApi(){
    const response = await fetch('https://dummyjson.com/products') //output is response

    let data = await response.json()
    console.log(data)

    if(num == data.products.length){
        num = 0
    }

    
    productImg.src=`${data.products[num].images}`
    title.innerHTML =`Title : ${data.products[num].title}`
    category.innerHTML=`Category : ${data.products[num].category}`
    brand.innerHTML = `Brand : ${data.products[num].brand}`
    price.innerHTML=`Price : $${data.products[num].price}`
    description.innerHTML = `Description : ${data.products[num].description}`
    rating.innerHTML =`Rating : ${data.products[num].rating}`

    num++
}

nextBtn.addEventListener('click',getApi)
