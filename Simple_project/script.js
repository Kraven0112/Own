const parent = document.querySelector('.container3')

const imgArray=[
    'https://img.freepik.com/free-vector/inspirational-quote-watercolour-background_1048-18831.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720569600&semt=ais_user',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKypTqSVK6tAByoSR-JBjuA6Ox1j4JFFBYvQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YG4CgxWldgDoxVkjfPnwkdGldsqyRAdsEA&s',
    'https://quotefancy.com/media/wallpaper/3840x2160/3262595-Jim-Breyer-Quote-I-think-that-we-should-all-be-defined-by-our-work.jpg',
    'https://quotefancy.com/media/wallpaper/3840x2160/5229753-B-Carroll-Reece-Quote-One-who-works-for-his-own-profit-is-likely.jpg',
    'https://quotefancy.com/media/wallpaper/3840x2160/3262595-Jim-Breyer-Quote-I-think-that-we-should-all-be-defined-by-our-work.jpg',
    'https://quotefancy.com/media/wallpaper/3840x2160/1000286-Alphonsus-Liguori-Quote-How-beautiful-she-is-Our-Lady-of.jpg',
    'https://quotefancy.com/media/wallpaper/1600x900/4121449-Susan-Cheever-Quote-If-a-woman-is-surrounded-by-lovers-or-if-a.jpg',
    'https://quotefancy.com/media/wallpaper/3840x2160/4047338-Alice-Eve-Quote-Women-are-less-aesthetic-than-men.jpg'
]
let n=0;
const image = document.createElement('img')
function getImage(){
    if(n == imgArray.length){
        n=0
    }
    image.src = imgArray[n]
    image.classList.add('image')
    parent.append(image)
    n++
}

setInterval(getImage,3000)