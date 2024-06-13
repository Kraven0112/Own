const show = document.querySelector('#show')
const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
let ms = 0
let sec = 0
let min = 0
let timer
start.addEventListener('click',()=>{
    return timer = setInterval(()=>{
        ms++
        if(ms==100)
            {
                ms=0
                sec++
                if(sec==60)
                    {
                        sec=0
                        min++
                        if(min==60)
                            {
                                min=0
                            }
                    }
            }

            show.innerHTML=`${min} : ${sec} : ${ms}`
    },12)
})

reset.addEventListener('click',()=>{
    clearInterval(timer)
    show.innerHTML="00 : 00 : 00"
})