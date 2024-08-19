// // Array destructuring in javascript.

// const arr1 = ["Cat","Dog","Buffalo","Cow","Goat"]

// // first level destructure of array
// let[first,second,...all] = arr1
// console.log(first.toUpperCase())
// console.log(second.toUpperCase())
// console.log(all)

// //second level destructure of array
// let{0:zero,1:one,...whole} = arr1
// console.log(zero)
// console.log(one)
// console.log(whole)

// // prototype method of an array
// Array.prototype.getAll = function(){
//     for(let i=0; i<this.length; i++){
//         console.log(this[i].split(''))
//     }
// }

// const output1 = all.getAll()

// const output2 = Object.values(whole).map(function(element){
//     return element.split('')
// })

// function getDistinct(para1){
//     for(let i=0; i<para1.length; i++){
//        console.log(para1[i])
//     }
// }
// getDistinct(output2)

// // unique letter from any word
// const word = "buffalo"

// function uniqueLetter(word){
//     let khali = []
//     for(let i=0; i<word.length; i++){
//         if(!khali.includes(word[i])){
//             khali.push(word[i])
//         }
//     }
//     return khali
// }

// const result = uniqueLetter(word)
// console.log(result)
