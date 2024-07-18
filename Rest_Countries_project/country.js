const countryName = new URLSearchParams(location.search).get("name")

fetch(`https://restcountries.com/v3.1/all`)
.then((response)=>response.json())
.then((data)=>{
    console.log(data.forEach((country)=>{
        console.log(country.borders)
    }))
})