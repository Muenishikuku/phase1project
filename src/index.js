document.getElementById('country-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    // Get the input value (country name)
    const countryName = document.getElementById('country-name').value;

    // Fetch country information
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();

      if (data.length > 0) {
        const country = data[0];
        
        // Display all provided information
        const countryInfo = `
        <p>Flag: <img src="${country.flags.svg}" alt="${country.name.common} Flag" style="max-width: 200px;"></p>
        <h2>${country.name.common}</h2>
        <p>Official Name: ${country.name.official}</p>
        <p>Region: ${country.region}</p>
        <p>Subregion: ${country.subregion}</p>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area} square kilometers</p>
        <p>Country Codes (CCA2, CCN3, CCA3, CIOC): ${country.cca2}, ${country.ccn3}, ${country.cca3}, ${country.cioc}</p>
        <p>Capital: ${country.capital}</p>
        <p>Currencies: ${JSON.stringify(country.currencies)}</p>
        <p>Independent: ${country.independent ? 'Yes' : 'No'}</p>
        <p>UN Member: ${country.unMember ? 'Yes' : 'No'}</p>
        <p>Languages: ${JSON.stringify(country.languages)}</p>
        <p>Translations: ${JSON.stringify(country.translations)}</p>
        <p>Latitude and Longitude: ${JSON.stringify(country.latlng)}</p>
        <p>Landlocked: ${country.landlocked ? 'Yes' : 'No'}</p>
        <p>Area: ${country.area} square kilometers</p>
        <p>Demonyms: ${JSON.stringify(country.demonyms)}</p>
       
      `;

        document.getElementById('country-info').innerHTML = countryInfo;
      } else {
        document.getElementById('country-info').innerHTML = 'Country not found.';
      }
    } catch (error) {
      document.getElementById('country-info').innerHTML = 'Error fetching data.';
    }
  });