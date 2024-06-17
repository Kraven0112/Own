const form = document.querySelector('form')

form.addEventListener('submit',(event)=>{
    // console.log(event.target)
    // console.log(event.currentTarget)
    event.preventDefault()
    const dataForm = new FormData(form)

    // console.log(dataForm)

    for(const value of dataForm.entries())
        {
            console.log(value)
        }
})