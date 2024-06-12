const parent = document.querySelector("#groot")

//  creating element
const element1 = document.createElement("span")
element1.innerHTML = "<i>Hello I am span.</i>"

const element2 = document.createElement("code")
element2.innerHTML = "I am a code."

const element3 = document.createElement("img")
element3.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgY2N7CqrHD5J4c5VBYDTVh7X10-JWGs_gDw&s"


//we can append single element using appendChild() method in javascipt.
// parent.appendChild(element1)

//using append() to append multiple elements in at a single time
parent.append(element1,element2,element3)
