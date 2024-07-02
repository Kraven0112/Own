const progress = document.querySelector('.progress')
const playPause = document.querySelector('.playPause')
const audio = new Audio("Bura_Haal.mp3")

audio.onloadeddata = function()
{
    progress.max =  audio.duration
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
        playPause.classList.remove("fa-pause")
        playPause.classList.add("fa-play")
    }
})

if(audio.play)
    {
       setInterval(()=>{
        progress.value = audio.currentTime
       },500)
    }

progress.addEventListener('change',()=>{
        audio.currentTime = progress.value
             audio.play()
            playPause.classList.add("fa-pause")
            playPause.classList.remove("fa-play")
})