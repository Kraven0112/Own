const show = document.querySelector('#time')
const dayShow = document.querySelector('#day')
const date = document.querySelector('#relate')

  function getTime()
  {
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const meridiem = 'AM'

     
    if(meridiem < 12)
        {
        meridiem = 'PM'
        }
      

    hour = hour < 10 ? "0"+hour : hour
    minute = minute < 10 ? "0"+minute : minute
    second = second < 10 ? "0"+second : second

    show.innerHTML = `${hour}:${minute}:${second} ${meridiem}`
  }

  setInterval(getTime,1000)