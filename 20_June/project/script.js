const parent = document.querySelector(".display")
const add = document.querySelector("#add")
const remove = document.querySelector("#remove")
const message = document.querySelector("#field")
const necessary = document.querySelector("#error")
add.title="Add your task"
remove.title="Remove your task"
message.title="enter about task"

add.addEventListener("click", () => {
    if(message.value == false)
        {
            necessary.style.cssText=`visibility:visible;`
        }
    else{
        necessary.style.cssText=`visibility:hidden;`
        const page = document.createElement("h3")
        page.innerHTML = message.value
        page.id = "para"
        parent.append(page)
        message.value = ""
        remove.addEventListener("click", () => {
        page.remove()
        })
    }
})