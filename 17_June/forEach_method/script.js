const animals = ["Cat","Dog","Cow","Buffalo","Goat"]


animals.forEach((animal,index,array)=>{
    const element = document.createElement('div')
    element.innerHTML=array
    document.body.append(element)
})
