//creating promises
const coronaDetail =document.getElementById('come')
const promises = 'https://api.bigdatacloud.net/data/reverse-geocode-client'


async function getData()
{
   try{
    const data = await fetch(promises)
    const actualData = await data.json()
    return actualData
   }
   catch(error)
   {
    console.log(error)
   }
}

async function getApi()
{
    const result = await getData()
    console.log(result)

 coronaDetail.innerText = `${result.countryName},${result.city},${result.latitude}`
}
getApi()