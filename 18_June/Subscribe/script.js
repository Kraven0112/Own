const subscribe = document.createElement('button')
const unsubscribe = document.createElement('button')
subscribe.innerHTML = "Subscribe"
unsubscribe.innerHTML = "Unsubscribe"

subscribe.classList.add('button')
unsubscribe.classList.add('button')
document.body.append(subscribe,unsubscribe)

subscribe.addEventListener('click',()=>{
    alert("You have subscribed this channel.")
})

unsubscribe.addEventListener('click',()=>{
    alert("You have unsubscribed this channel.")
})