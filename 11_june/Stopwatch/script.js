const timeShow = document.getElementById('show')
let hour = 0
let minute = 0
let second = 0
let milisecond = 0

function startWatch()
{
    setInterval(()=>{
        milisecond ++
        if(milisecond == 100)
            {
             milisecond= 0
                second++
            if(second == 60)
                {
                    second = 0
                    minute++
                    if(minute == 60)
                        {
                            minute = 0
                            hour++
                        }
                }
             }
            
        timeShow.innerHTML = `${hour}:${minute}:${second}:${milisecond}`
    },12)
}

function resetWatch()
{
   
}




