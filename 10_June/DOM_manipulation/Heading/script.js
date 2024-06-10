//text for heading tag
const arrText = ["Hello1", "Hello2", "Hello3", "Hello4", "Hello5"]

//NodeList[] of heading tag -- h2
const heading = document.querySelectorAll("h2")

//Actual array of h2 tag
const actualHeading = [...heading]

//manipulate using for loop
// for (let i = 0; i < heading.length; i++) {
//   heading[i].innerHTML = arrText[i]
// }

//manipulate using for_in loop
// for(const text in arrText)
//     {
//         heading[text].innerHTML=arrText[text]
//     }


//manipulate using for_of loop
// let num = 0
// for(const text of arrText)
//     {
//         heading[num++].innerHTML=text
//     }

//forEach() method to manipulate heading tag

arrText.forEach((text,index,array)=>{
    heading[index].innerHTML=text
})