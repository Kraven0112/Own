const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
let ms = 0
let sec = 0
let min = 0
let hour = 0
let timer
start.addEventListener('click',()=>{                                                          
 return timer = setInterval(()=>{
    ms++
    if(ms==100)
        {
            ms=0
            sec++
           sec = sec < 10 ? "0" +sec : sec;
            if(sec==60)
                {
                    sec=0
                    min++
                    min= min<10? "0"+min : min
                    if(min==60)
                        {
                            min=0
                            hour++
                            hour = hour<10 ? "0"+hour : hour
                        }
                }
        }
        document.querySelector('h1').innerHTML=`${hour}:${min}:${sec}:${ms}`
  },12)
})

stop.addEventListener('click',()=>{
    clearInterval(timer)
})

reset.addEventListener('click',()=>{
    clearInterval(timer)
    document.querySelector('h1').innerHTML="00:00:00:00"
})