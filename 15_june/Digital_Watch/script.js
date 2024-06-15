const show = document.querySelector('#time')
const date = document.querySelector('#relate')

  function getTime()
  {
    let time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    let meridiem = 'PM'

    if(hour>12)
      {
        hour =hour - 12
      }
     
    if(meridiem < 12)
        {
        meridiem = 'AM'
        }
      

    hour = hour < 10 ? "0"+hour : hour
    minute = minute < 10 ? "0"+minute : minute
    second = second < 10 ? "0"+second : second

    show.innerHTML = `${hour}:${minute}:${second} ${meridiem}`
  }

  setInterval(getTime,1000)