const form = document.querySelector("form")
const user1Input = document.querySelector(".user1")
const user2Input = document.querySelector(".user2")
const result = document.querySelector(".result span")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const user1DOB = Date.now()-parseDate(user1Input.value).getTime()
  const user2DOB = Date.now()-parseDate(user2Input.value).getTime()

  if(user1DOB > user2DOB){
    result.innerHTML = `User1 is older than User2.`
  }else if(user1DOB == user2DOB){
    result.innerHTML = "Both user  have same age."
  }else{
    result.innerHTML = "User2 is older than User1."
  }
})

function parseDate(dobString){
    const [dateString, timeString] = dobString.split(" ")
    const [day,month,year] = dateString.split("/").map((el) => Number(el))
    const [hour,minute] = timeString.split(":").map((el) => Number(el))
  
    const user={
        day:day,
        month:month,
        year :year,
        hour:hour,
        minute:minute
    }
    console.log(user)
    return new Date( year, month-1, day, hour, minute
    )
}


