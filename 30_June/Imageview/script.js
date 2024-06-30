const parent = document.querySelector('.Imageshow')
const audio = new Audio("Bura_Haal.mp3")

const imgArray=[
    "https://t4.ftcdn.net/jpg/06/33/03/47/360_F_633034756_MxqGWPVcKegNJLxCpF5winOkEX2Ngkgq.jpg",
    "https://t3.ftcdn.net/jpg/06/61/86/84/360_F_661868488_b5wBvMk4etK1uAtoZ48AdxPuMimRZTOf.jpg",
    "https://t3.ftcdn.net/jpg/08/01/13/86/240_F_801138643_bAOzNsQc8rrLzzGUFNotIhtDzEog9VDT.jpg",
    "https://rukminim2.flixcart.com/image/850/1000/l01blow0/poster/2/w/z/medium-music-wallpaper-on-fine-art-paper-theme-images-hd-original-imagbx2phbqcnzym.jpeg?q=90&crop=false",
    "https://t3.ftcdn.net/jpg/06/74/83/52/360_F_674835250_x04bOOJcASvhueULpuKBfJoi4EFdydnM.jpg"
]
let num = 0
let element1 = document.createElement('img')
function show()
{
    if(num == imgArray.length)
        {
            num = 0
        }
    element1.src= imgArray[num]
    element1.classList.add('image')
    parent.append(element1)
    num++
}

element1.addEventListener('click',()=>{
    audio.paused ? audio.play() : audio.pause()
})

setInterval(show,2000)