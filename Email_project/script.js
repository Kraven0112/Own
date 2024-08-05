const myform = document.querySelector("form")
const sender = document.querySelector("#email1")
const receiver = document.querySelector("#email2")
const subject = document.querySelector("#subject")
const message = document.querySelector("#message")

function sendEmail() {
  Email.send({
    SecureToken:"f5cfe963-09fd-4aeb-8b3f-005f0d6f1abe",
    To: receiver.value,
    From: sender.value,
    Subject: subject.value,
    Body: message.value,
  }).then(() => alert("message sent successfully"))
}

myform.addEventListener('submit',(event)=>{
    event.preventDefault()
    sendEmail()
})