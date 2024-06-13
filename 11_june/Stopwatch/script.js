let timeShow = document.getElementById('show')
let hour = 0
let minute = 0
let second = 0
let milisecond = 0
let timer
function startWatch()
{
    return timer = setInterval(()=>{
        milisecond ++
        if(milisecond == 100)
            {
             milisecond=0
                second++
            if(second == 60)
                {
                    if(second<10)
                        {
                            second="0"+second
                        }
                    second = 0
                    minute++
                    if(minute == 60)
                        {
                            minute = 0
                            hour++
                        }
                }
             }
              timeShow.innerHTML = `${hour} : ${minute} : ${second} : ${milisecond}`
    },11)
}

function stopWatch()
{
  clearInterval(timer) //clearing timer using clearInterval() and we can use clearTimeout
}
function resetWatch()
{
    clearInterval(timer)
    timeShow.innerHTML="00 : 00 : 00 : 00"
}




