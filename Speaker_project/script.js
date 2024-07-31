const input = document.querySelector('#input')
const speaker = document.querySelector('#speaker')

speaker.addEventListener('click',(event)=>{
    const text = input.value

    const utterance = new SpeechSynthesisUtterance(text)
    
    speechSynthesis.speak(utterance)

    input.value= ""
})


const link = document.createElement('link')
link.rel="stylesheet"
link.href="./style.css"

document.querySelector('head').append(link)


