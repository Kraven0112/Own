//using className for chnages
const toggler = document.querySelector('#toggler')

// toggler.addEventListener('click',()=>{
//     if(document.body.className =='second')
//         {
//             document.body.className='first'
//         }
//         else{
//             document.body.className='second'
//         }
// })

//using classList for change

// toggler.addEventListener('click',()=>{
//     if(document.body.classList.add('first'))
//         {
//             document.body.classList.add('second')
//         }
//     else{
//         document.body.classList.add('first')
//     }
// })

//Using cssText in javascript for update
toggler.addEventListener('click',()=>{
    if(document.body.style.cssText == false)
        {
            document.body.style.cssText = `
            background-color:black;
            color:white;
            font-size:40px;
            `
        }
    else{
        document.body.style.cssText=`
        background-color:blue;
        color:red;
        font-size:50px;
        `
    }
})