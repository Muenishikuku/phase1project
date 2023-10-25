document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  const resultContainer = document.getElementById("resultContainer");

  form.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Get the user's input from the form
      const searchInput = document.getElementById("searchInput").value;

      // Check if the search input is not empty
      if (!searchInput) {
          resultContainer.innerHTML = "Please enter a search query.";
          return;
      }

      // Construct the API URL with the user's input as a query parameter
      const apiUrl = `https://google-search-json.p.rapidapi.com/search/web?q=${encodeURIComponent(searchInput)}`;
      const options = {
          method: "GET",
          headers: {
              "X-RapidAPI-Key": "9ae39133ffmsh3cfa88e47b748cap1d27a5jsn3e767274536f",
              "X-RapidAPI-Host": "google-search-json.p.rapidapi.com",
          },
      };

      try {
          const response = await fetch(apiUrl, options);
          const data = await response.json(); // Parse JSON data

          // Clear previous results
          resultContainer.innerHTML = '';

          // Loop through the search results and display them
          data.items.forEach(item => {
              const title = item.title;
              const link = item.link;
              resultContainer.innerHTML += `<p><a href="${link}" target="_blank">${title}</a></p>`;
          });
      } catch (error) {
          console.error(error);
          resultContainer.innerHTML = "An error occurred while fetching data.";
      }
  });
});