'use strict'
const playPause = document.querySelector('.playPause')
const audio = new Audio("Lehnga.mp3")
let progress = document.querySelector("#progress")

audio.onloadedmetadata = function()
{
    progress.max = audio.duration
    progress.value = audio.currentTime
}

playPause.addEventListener('click',()=>{
    if(playPause.classList.contains("fa-play"))
        {
            audio.play()
            playPause.classList.add("fa-pause")
            playPause.classList.remove("fa-play")
        }
    else{
        audio.pause()
        playPause.classList.add("fa-play")
        playPause.classList.remove("fa-pause")
    }
})

if(audio.play())
    {
        setInterval(()=>{
            progress.value = audio.currentTime
        },500)
    }

progress.addEventListener('change',()=>{
    audio.play()
    audio.currentTime = progress.value
    playPause.classList.remove("fa-play")
    playPause.classList.add("fa-pause")
})