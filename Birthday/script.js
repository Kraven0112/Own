let parent = document.querySelector('.photo')
let image = document.querySelector('.image')
let getmsgBtn = document.querySelector('.getmsg')
let mainmsg = document.querySelector('.title')
let secondMsg = document.querySelector('.message')
let num = 0
const imagArray=[
    'https://cdnjs.angroos.com/wp-content/uploads/2024/01/DALL%C2%B7E-2024-01-18-17.07.28-A-realistic-birthday-greeting-card-featuring-a-vibrant-celebratory-background.-In-the-center-_Happy-Birthday_-is-written-in-elegant-cursive-script.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_mAAAG43otryBJPwT1akDKFy0Fc0QmrzQwBa8rUcHQVbqFFP_Y996DunbDyutEK3y0E&usqp=CAU',
    'https://t3.ftcdn.net/jpg/04/42/62/12/360_F_442621279_PYhie13pVGcSSYTAm1eqlC3e7Lcy0oNV.jpg',
    'https://png.pngtree.com/png-clipart/20221122/ourmid/pngtree-happy-birthday-text-effect-png-image_241348.png',
    'https://t3.ftcdn.net/jpg/03/25/69/56/240_F_325695691_662cr0MVqqJ6NA1dzgmtlMtHCoT6aguX.jpg',
    'https://t4.ftcdn.net/jpg/04/72/13/73/240_F_472137395_ftcnpJgAEqN5JnfbtwDxO8mfZdllXodc.jpg',
    'https://i.pinimg.com/736x/b0/d4/19/b0d419313407d3aa4b6842d7da71a9f8.jpg',
    'https://i.ytimg.com/vi/p2Jsc1JxN9k/hqdefault.jpg',
    'https://api.writco.in/assets/images/post/user/quote/991230806075445977.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qF2ZYBqxW9rnDcEmJrlQGEaWZIRa_lKDBU9BLwgpXuuKRK2b99No_vICaTCqCldY9b8&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYvRjhQfo76zdUewt7JH2317H52lCRF2UzNs06GUn4T7eT0tUea-MmsUt5c7YbsUkRvY&usqp=CAU',
    'https://quotefancy.com/media/wallpaper/3840x2160/3302861-Genelia-D-Souza-Quote-I-d-certainly-go-for-a-love-marriage.jpg'
]

function birthday(){
    if(num == imagArray.length){
        num = 0
    }
    image.src = imagArray[num]
    num++
}

getmsgBtn.addEventListener('click',()=>{
    getmsgBtn.style.display="none"
    mainmsg.style.visibility = "visible"
    parent.style.visibility = "visible"
    secondMsg.style.visibility="visible"
    setInterval(birthday,3000)
})