const reviewArray=[
    "I am extremely satisfied with the services provided by this assistant. The responses are always accurate and helpful. I highly recommend it to anyone looking for a reliable assistant.",
    "I was blown away by the speed and efficiency of this assistant. It's like having a personal assistant at your fingertips. The services are top-notch and I couldn't be happier.",
    "I've been using this assistant for a while now, and I have to say that it's been a game-changer for me. The responses are always informative and helpful, and the assistant is always available to help.",
    "I was skeptical at first, but this assistant has exceeded all my expectations. The services are personalized and tailored to my needs, and the assistant is always willing to go the extra mile.",
    "I've tried other assistants before, but this one is by far the best. The responses are always accurate and relevant, and the assistant is always friendly and helpful.",
    "I'm so impressed with the services provided by this assistant. It's like having a team of experts at your disposal. The assistant is always available to help and provides top-notch support.",
    "I was struggling to find the right information, but this assistant helped me find exactly what I needed. The services are fast and efficient, and the assistant is always knowledgeable and helpful.",
    "I've been using this assistant for a while now, and I have to say that it's been a lifesaver. The services are always reliable and efficient, and the assistant is always willing to help.",
    "I was hesitant to try a new assistant, but this one has exceeded all my expectations. The services are personalized and tailored to my needs, and the assistant is always friendly and helpful.",
    "I'm so grateful to have found this assistant. The services are top-notch and the assistant is always available to help. I highly recommend it to anyone looking for a reliable and efficient assistant."

]

const nameArray=[
    " Emily W",
    " David K",
    "Sarah T",
    "Mark H",
    "Rachel G",
    "James B",
    "Christine L",
    "Michael T",
    "Laura K",
    " Kevin W"
]

const jobArray=[
    "Cloud Infrastructure Architect",
    "Data Science Engineer",
    "Cybersecurity Consultant",
    "Full Stack Developer",
    "DevOps Engineer",
    "Artificial Intelligence Researcher",
    "Network Security Engineer",
    "Database Administrator",
    "Software Quality Assurance Engineer",
    "Computer Vision Engineer"
]

const imgArray = [
    "https://img.freepik.com/premium-photo/woman-wearing-professional-business-dress-protrait-photos_1020867-20516.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/029/331/466/small_2x/ai-generative-happy-businessman-standing-with-arms-crossed-isolated-on-white-background-free-photo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQal-zoU3mjqRLlaGfm4m4b3OWZAyv6BYvJXQ&s",
    "https://t3.ftcdn.net/jpg/02/48/15/86/360_F_248158608_0ErNeAWWx6GZVDCg66jNRoPGEhHCSpaJ.jpg",
    "https://s3.envato.com/files/477587569/65576629802a50571e38e772_withmeta.jpg",
    "https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg",
    "https://t4.ftcdn.net/jpg/01/56/27/43/360_F_156274307_vvR5lO31LlIwtoFB1CC8jZtttlyQbK9M.jpg",
    "https://www.shutterstock.com/image-photo/portrait-indian-businessman-digital-tablet-260nw-2256941407.jpg",
    "https://thumbs.dreamstime.com/z/isolated-business-woman-portrait-office-worker-female-model-43507826.jpg",
    "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"
]

let myname = document.querySelector('#myname strong')
let job = document.querySelector('#job strong')
let review = document.querySelector('#review')
let myimage = document.querySelector('#myimg')
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let randomBtn = document.querySelector('.random')

//global variable
let num = 0;

//window object
window.addEventListener('DOMContentLoaded',()=>{
    getreview()
})

//getreview function
function getreview () {
    myimage.src = imgArray[num]
    myname.innerHTML = nameArray[num]
    job.innerHTML = jobArray[num]
    review.innerHTML = reviewArray[num]  
}

//nextBtn 
nextBtn.addEventListener('click',()=>{
    num++
    if(num > imgArray.length-1){
        num = 0
    }
    getreview()
})

//prevBtn
prevBtn.addEventListener('click',()=>{
    num--
    if(num < 0){
        num = imgArray.length-1
    }
    getreview()
})

//randomBtn
randomBtn.addEventListener('click',()=>{
    num = Math.floor(Math.random()*10)
    getreview()
})
