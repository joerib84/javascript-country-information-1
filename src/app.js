import axios from "axios";

// Zoek het endpoint voor binnenhalen van de informatie
// Maak een asynchrone functie die de naam van het land, de vlag en bevolkingsgrootte ophaalt
// Maak variabelen aan om deze data in op te slaan
// Maak een lijst om de data weer te geven op de pagina
// Map door de array
// Voeg de data toe aan een element
// Sorteer de landen op basis van grootte van laag naar hoog
// Maak een functie die iedere regio een andere kleur geeft

async function countryData() {
    try{
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result.data);

        result.data.sort((a, b) => {
            return a.population - b.population;
        })

        getAllCountries(result.data);

    }catch(error){
        console.error(error)
    }
}

countryData();

function getAllCountries(countries){
    const countryUnorderedList = document.getElementById('country-list');

    countries.map((allCountries) => {

    const countryList = document.createElement('li');

        countryList.innerHTML = `
            <a href="${allCountries.flag}"><img src="${allCountries.flag}" alt="flags" class="flags"/></a>
            <h3 class="${regionColor(allCountries.region)}">${allCountries.name}</h3>
            <p>Has a population of ${allCountries.population} people</p>
            `

        countryUnorderedList.appendChild(countryList);
    })
}

function regionColor(region) {
    if(region === "Africa") {
        return "blue"
    }
    if (region === "Americas") {
        return "green"
    }
    if (region === "Oceania") {
        return "purple"
    }
    if (region === "Europe") {
        return "yellow"
    }
    if (region === "Asia") {
        return "red"
    }
}
