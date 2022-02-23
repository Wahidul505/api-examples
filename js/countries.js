const loadCountries = () => {
  fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = data => {
  // console.log(data);
  const countries = document.getElementById('countries');
  data.forEach(country => {
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML = `
    <h2>${country.name}</h2>
    <h3>${country.capital}</h3>
    <button onclick="loadCountryDetails('${country.name}')">Details</button>
    `
    countries.appendChild(div);
  })
}

const loadCountryDetails = name => {
  const url = `https://restcountries.com/v2/name/${name}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data));
}
const displayCountryDetails = country => {
  const countryInfo = country[0];
  console.log(countryInfo);
  const countryDetails = document.getElementById('county-details');
  countryDetails.innerHTML = `
  <h1>${countryInfo.name}</h1>
  <h3>Population: ${countryInfo.population}</h3>
  <p>code: ${countryInfo.currencies[0].code} symbol: ${countryInfo.currencies[0].symbol}</p>
  <img width="300px" src="${countryInfo.flag}">
  `
}