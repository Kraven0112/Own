const showDetail = document.querySelector('#date')

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

let date = new Date()

let day = date.getDate(0-31)
let month = months[date.getMonth(0-11)]
let year = date.getFullYear()

day = day <10 ? "0"+day : day

showDetail.innerHTML=`${day}-${month}-${year}`



