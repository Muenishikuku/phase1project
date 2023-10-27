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
        
        // Extract specific information
        const countryInfo = `
          <h2>${country.name.common}</h2>
          <p>Official Name: ${country.name.official}</p>
          <p>Region: ${country.region}</p>
          <p>Subregion: ${country.subregion}</p>
          <p>Population: ${country.population}</p>
          <p>Area: ${country.area} square kilometers</p>
          <p>Capital: ${country.capital}</p>
          <p>Independent: ${country.independent ? 'Yes' : 'No'}</p>
          <p>UN Member: ${country.unMember ? 'Yes' : 'No'}</p>
          <p>Flag: <img src="${country.flags.svg}" alt="${country.name.common} Flag" style="max-width: 200px;"></p>
        `;

        document.getElementById('country-info').innerHTML = countryInfo;
      } else {
        document.getElementById('country-info').innerHTML = 'Country not found.';
      }
    } catch (error) {
      document.getElementById('country-info').innerHTML = 'Error fetching data.';
    }
  });