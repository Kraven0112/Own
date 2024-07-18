const countriesContainer = document.querySelector(".countries-container")

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
        console.log(country)
      const countryCard = document.createElement("a")
      countryCard.classList.add("country-card")
      countryCard.href = `./country.html`
      countryCard.innerHTML =`
                <img src=${country.flags.svg} alt="">
               <div class="card-title">
                <h3>${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
               </div>
                `

      countriesContainer.append(countryCard)
    })
  })
  .catch((err) => console.log(err))


//   const number = 235400

//   const result = new Intl.NumberFormat('en-IN').format(number)

// const num = 1234500
// console.log(num.toLocaleString('en-IN'))