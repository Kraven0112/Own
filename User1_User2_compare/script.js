const form = document.querySelector('form')
const user1Input = document.querySelector('#user1')
const user2Input = document.querySelector('#user2')
const output = document.querySelector('#result span')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const user2 = Date.now()-parseDate(user2Input.value).getTime()
    const user1 = Date.now()-parseDate(user1Input.value).getTime() 

    const [dateString1,timeString1] = user1Input.value.split(' ')
    const [day1,month1,year1] = dateString1.split('-').map((e)=>Number(e))
    const [hour1,minute1] = timeString1.split(':').map((e)=>Number(e))

    const user1Obj ={
        day:day1,
        month:month1,
        year:year1,
        hour:hour1,
        minute:minute1
    }

    const [dateString2,timeString2] = user2Input.value.split(' ')
    const [day2,month2,year2] = dateString2.split('-').map((e)=>Number(e))
    const [hour2,minute2] = timeString2.split(':').map((e)=>Number(e))

    const user2Obj ={
        day:day2,
        month:month2,
        year:year2,
        hour:hour2,
        minute:minute2
    }

    console.log(user1Obj)
    console.log(user2Obj)


    if(user1>user2){
        output.innerHTML=`User1 is ${user2Obj.year-user1Obj.year} years ${user2Obj.day-user1Obj.day} days ${user2Obj.month-user1Obj.month} months older than User2.`
    }else if(user2>user1){
        output.innerHTML=`User2 is ${user1Obj.year-user2Obj.year} years ${user1Obj.day-user2Obj.day} days ${user1Obj.month-user2Obj.month} months older than User2.`
    }else{
        output.innerHTML=`Both user have same age.`
    }
    
})

function parseDate(dateData){
    const[dateString,timeString] = dateData.split(' ')

    const [day,month,year] = dateString.split('-').map((e)=>Number(e))
    const [hour,minute] = timeString.split(':').map((e)=>Number(e))

    const date =  new Date(year,month-1,day,hour,minute)
    return date

    // const user={
    //     day:day,
    //     month:month,
    //     year:year,
    //     hour:hour,
    //     minute:minute
    // }
    // console.log(user)
    // console.log(date)
}
