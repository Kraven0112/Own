const tag = document.querySelector('.container')
const rect = tag.getBoundingClientRect()



for(const num in rect){
    if(typeof(rect[num]) !=="function"){
        let para = document.createElement('p')
        para.textContent = `${num} : ${rect[num]}`
        document.body.appendChild(para)
    }
}

