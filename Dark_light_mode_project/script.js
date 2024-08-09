const mode = document.querySelector('#button .span')
const body = document.querySelector('body')

mode.addEventListener('click',(event)=>{
if(mode.className == 'span'){
    mode.classList.toggle('toggle1')
    mode.classList.remove('span')
    body.classList.add('one')
    body.classList.remove('two')

}else if(mode.className == 'toggle1'){
    mode.classList.toggle('span')
    mode.classList.remove('toggle1')
    body.classList.remove('one')
}
})
