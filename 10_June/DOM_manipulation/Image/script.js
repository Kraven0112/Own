//getting image url from web Api
const imgUrl = [
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717977600&semt=sph",
  "https://preview.redd.it/t65h5m1ckjk51.jpg?width=1080&crop=smart&auto=webp&s=7a0440d0a3cf625b5679836109875cbdb0a30081",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixcmQsARbTtwpySN--xqSmWg_p2yTCYv80A&s",
  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  "https://static.vecteezy.com/system/resources/previews/024/669/482/non_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-8-photo.jpeg"
]

//It will provide nodelist[] of img elements
const images = document.querySelectorAll("img")

//Actual array of img tag from nodelist[]
const imageAll = [...document.images]

//using for loop to manipulate img element
// for (let i = 0; i < images.length; i++) {
//   images[i].src = imgUrl[i]
// }

//using for_of loop to manipulate img element(direct value)
// let num=0
// for(const i of imgUrl)
//     {
//         images[num++].src=i
//     }

//using for_in loop to manipulate img element(index of image)
for(const image in imgUrl)
    {
        images[image].src=imgUrl[image]
    }


//for_Each() method in javascript
// imageAll.forEach((element,index)=>{
//     element.src=imgUrl[index]
// })