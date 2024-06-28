const questionArray=[
    "What is CSS means ?",
    "What is a use of stopPropagation() in javascript ?",
    "What is a use of preventDefault() ?",
    "What is hoisting ?",
    "What is lexicalScope ?"
]
const getQuestion = document.querySelector('.question')
let nextBtn = document.querySelector('.nextBtn')

function play()
{
    const sound = new Audio("correct-6033.mp3")
    nextBtn=sound.play()
}

let num = 0
nextBtn.addEventListener('click',()=>{
if(num == questionArray.length)
    {
        num = 0
    }
getQuestion.innerText=questionArray[num]
num++
})

nextBtn.addEventListener('click',play)