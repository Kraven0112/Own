const question = document.querySelector('.question')
const nextBtn = document.querySelector('.nextBtn')

const questionArray = [
    'Which element is used to highlight text in thml ?',
    'Which element is used to put javascript in html ?',
    'What is the fullform of CSS ?',
    'Is div semantic tag ?',
    'What is fullform of HTML ?'
]
let num = 0
nextBtn.addEventListener('click',()=>{
    if(num == questionArray.length)
        {
            num = 0
        }
    question.innerHTML = questionArray[num]
    num++
})