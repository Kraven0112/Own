const apiKey = "179201cf4a2038abcb731df735f5138e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherImg = document.querySelector('.weather-icon')

async function checkWeather(city)
{
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`)

    if(response.status == 404)
        {
            document.querySelector('.error').style.display="block"
            document.querySelector('.weather').style.display="none"
        }
        else{
            var data = await response.json()
            console.log(data)
   
            document.querySelector('.city').innerHTML=`${data.name}`
            document.querySelector('.temp').innerHTML=`${Math.round(data.main.temp)}°c`
            document.querySelector('.humidity').innerHTML=`${data.main.humidity}%`
            document.querySelector('.wind').innerHTML=`${data.wind.speed} km/hr`
        
            if(data.weather[0].main == 'Cloud')
                {
                    weatherImg.src="./clouds.png"
                }
            else if(data.weather[0].main == 'Clear')
                {
                    weatherImg.src="./clear.png"
                }
            else if(data.weather[0].main == "Rain")
                {
                    weatherImg.src="./rain.png"
                }
            else if(data.weather[0].main == "Drizzle")
                {
                    weatherImg.src="./drizzle.png"
                }
            else if(data.weather[0].main == "Mist")
                {
                    weatherImg.src="./mist.png"
                }
                document.querySelector('.weather').style.display="block"
                 document.querySelector('.error').style.display="none"
        }
   

}

searchBtn.addEventListener('click',()=>{
    checkWeather(search.value)
})
